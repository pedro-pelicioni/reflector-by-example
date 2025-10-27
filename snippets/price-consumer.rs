#![no_std]
use soroban_sdk::{contract, contractimpl, contracterror, Address, Env, Symbol, symbol_short};

/// Price Consumer Contract
/// 
/// A production-ready contract that consumes Reflector price feeds
/// with proper error handling and staleness checks.

const MAX_PRICE_AGE: u64 = 300; // 5 minutes in seconds

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq, PartialOrd, Ord)]
#[repr(u32)]
pub enum Error {
    PriceNotAvailable = 1,
    PriceTooOld = 2,
    InvalidPrice = 3,
}

#[contract]
pub struct PriceConsumer;

#[contractimpl]
impl PriceConsumer {
    /// Get a fresh price with staleness validation
    /// 
    /// This function queries the oracle and validates that:
    /// 1. The price exists
    /// 2. The price is recent (not older than MAX_PRICE_AGE)
    /// 3. The price is positive
    pub fn get_fresh_price(
        env: Env,
        oracle: Address,
        base: Symbol,
        quote: Symbol,
    ) -> Result<i128, Error> {
        // Query the oracle
        let price_data: Option<(i128, u64)> = env.invoke_contract(
            &oracle,
            &Symbol::new(&env, "lastprice"),
            (base, quote).into_val(&env),
        );
        
        // Check if price exists
        let (price, timestamp) = price_data.ok_or(Error::PriceNotAvailable)?;
        
        // Validate price is positive
        if price <= 0 {
            return Err(Error::InvalidPrice);
        }
        
        // Check staleness
        let current_time = env.ledger().timestamp();
        if current_time - timestamp > MAX_PRICE_AGE {
            return Err(Error::PriceTooOld);
        }
        
        Ok(price)
    }
    
    /// Get ETH/USD price with validation
    pub fn get_eth_usd(env: Env, oracle: Address) -> Result<i128, Error> {
        Self::get_fresh_price(
            env,
            oracle,
            symbol_short!("ETH"),
            symbol_short!("USD"),
        )
    }
    
    /// Get XLM/USD price with validation
    pub fn get_xlm_usd(env: Env, oracle: Address) -> Result<i128, Error> {
        Self::get_fresh_price(
            env,
            oracle,
            symbol_short!("XLM"),
            symbol_short!("USD"),
        )
    }
    
    /// Convert an amount using oracle price
    /// 
    /// Example: Convert 10 ETH to USD value
    pub fn convert_amount(
        env: Env,
        oracle: Address,
        amount: i128,
        from_asset: Symbol,
        to_asset: Symbol,
    ) -> Result<i128, Error> {
        let price = Self::get_fresh_price(env, oracle, from_asset, to_asset)?;
        
        // Price has 14 decimals, so we divide by 10^14
        let converted = (amount * price) / 100_000_000_000_000;
        
        Ok(converted)
    }
}

