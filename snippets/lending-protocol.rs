#![no_std]
use soroban_sdk::{
    contract, contractimpl, contracterror, contracttype,
    Address, Env, Symbol, symbol_short, Map,
};

/// Simple Lending Protocol using Reflector Oracle
/// 
/// This demonstrates a basic DeFi lending protocol that uses
/// price feeds to calculate collateral ratios and liquidations.

const LIQUIDATION_THRESHOLD: i128 = 150; // 150% collateralization ratio
const PRICE_DECIMALS: i128 = 100_000_000_000_000; // 10^14

#[contracttype]
#[derive(Clone)]
pub struct Position {
    pub collateral_amount: i128,  // Amount of collateral deposited
    pub debt_amount: i128,         // Amount borrowed
}

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum Error {
    InsufficientCollateral = 1,
    PositionNotFound = 2,
    PriceNotAvailable = 3,
    Undercollateralized = 4,
}

#[contract]
pub struct LendingProtocol;

#[contractimpl]
impl LendingProtocol {
    /// Borrow USDC against ETH collateral
    /// 
    /// User must maintain 150% collateralization ratio
    pub fn borrow(
        env: Env,
        oracle: Address,
        borrower: Address,
        collateral_eth: i128,
        borrow_usdc: i128,
    ) -> Result<(), Error> {
        // Get ETH/USD price
        let eth_price = Self::get_eth_price(env.clone(), oracle.clone())?;
        
        // Calculate collateral value in USD
        let collateral_value = (collateral_eth * eth_price) / PRICE_DECIMALS;
        
        // Calculate required collateral (150% of borrow amount)
        let required_collateral = (borrow_usdc * LIQUIDATION_THRESHOLD) / 100;
        
        // Check if user has enough collateral
        if collateral_value < required_collateral {
            return Err(Error::InsufficientCollateral);
        }
        
        // Store position
        let mut positions: Map<Address, Position> = env
            .storage()
            .persistent()
            .get(&Symbol::new(&env, "positions"))
            .unwrap_or(Map::new(&env));
        
        positions.set(
            borrower.clone(),
            Position {
                collateral_amount: collateral_eth,
                debt_amount: borrow_usdc,
            },
        );
        
        env.storage()
            .persistent()
            .set(&Symbol::new(&env, "positions"), &positions);
        
        Ok(())
    }
    
    /// Check if a position can be liquidated
    pub fn is_liquidatable(
        env: Env,
        oracle: Address,
        borrower: Address,
    ) -> Result<bool, Error> {
        // Get position
        let positions: Map<Address, Position> = env
            .storage()
            .persistent()
            .get(&Symbol::new(&env, "positions"))
            .ok_or(Error::PositionNotFound)?;
        
        let position = positions
            .get(borrower)
            .ok_or(Error::PositionNotFound)?;
        
        // Get current ETH price
        let eth_price = Self::get_eth_price(env, oracle)?;
        
        // Calculate current collateral value
        let collateral_value = (position.collateral_amount * eth_price) / PRICE_DECIMALS;
        
        // Calculate minimum required collateral
        let required_collateral = (position.debt_amount * LIQUIDATION_THRESHOLD) / 100;
        
        // Position is liquidatable if collateral < required
        Ok(collateral_value < required_collateral)
    }
    
    /// Get current health factor of a position
    /// Returns health factor scaled by 100 (e.g., 150 = 1.5x)
    pub fn get_health_factor(
        env: Env,
        oracle: Address,
        borrower: Address,
    ) -> Result<i128, Error> {
        let positions: Map<Address, Position> = env
            .storage()
            .persistent()
            .get(&Symbol::new(&env, "positions"))
            .ok_or(Error::PositionNotFound)?;
        
        let position = positions
            .get(borrower)
            .ok_or(Error::PositionNotFound)?;
        
        let eth_price = Self::get_eth_price(env, oracle)?;
        
        // Calculate collateral value
        let collateral_value = (position.collateral_amount * eth_price) / PRICE_DECIMALS;
        
        // Health factor = (collateral_value / debt) * 100
        if position.debt_amount == 0 {
            return Ok(1000); // Max health factor if no debt
        }
        
        let health_factor = (collateral_value * 100) / position.debt_amount;
        
        Ok(health_factor)
    }
    
    /// Helper function to get ETH price from oracle
    fn get_eth_price(env: Env, oracle: Address) -> Result<i128, Error> {
        let price_data: Option<(i128, u64)> = env.invoke_contract(
            &oracle,
            &Symbol::new(&env, "lastprice"),
            (symbol_short!("ETH"), symbol_short!("USD")).into_val(&env),
        );
        
        let (price, _timestamp) = price_data.ok_or(Error::PriceNotAvailable)?;
        
        Ok(price)
    }
}

