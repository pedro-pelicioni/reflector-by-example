#![no_std]
use soroban_sdk::{contract, contractimpl, vec, Address, Env, Symbol, Vec, symbol_short};

/// Multi-Asset Price Queries
/// 
/// Demonstrates how to efficiently query multiple asset prices
/// in a single call using the Reflector Oracle's lastprices function.

#[contract]
pub struct MultiAsset;

#[contractimpl]
impl MultiAsset {
    /// Get prices for multiple crypto assets against USD
    /// 
    /// Returns a vector of Option<(i128, u64)> for each asset pair
    /// Order: BTC/USD, ETH/USD, XLM/USD
    pub fn get_crypto_prices(
        env: Env,
        oracle: Address,
    ) -> Vec<Option<(i128, u64)>> {
        // Create a vector of asset pairs to query
        let mut assets = vec![&env];
        
        // BTC/USD
        assets.push_back((symbol_short!("BTC"), symbol_short!("USD")));
        
        // ETH/USD
        assets.push_back((symbol_short!("ETH"), symbol_short!("USD")));
        
        // XLM/USD
        assets.push_back((symbol_short!("XLM"), symbol_short!("USD")));
        
        // Call lastprices with the vector of pairs
        let prices: Vec<Option<(i128, u64)>> = env.invoke_contract(
            &oracle,
            &Symbol::new(&env, "lastprices"),
            (assets,).into_val(&env),
        );
        
        prices
    }
    
    /// Get a portfolio value in USD
    /// 
    /// Given holdings of BTC, ETH, and XLM, calculate total USD value
    pub fn get_portfolio_value(
        env: Env,
        oracle: Address,
        btc_amount: i128,
        eth_amount: i128,
        xlm_amount: i128,
    ) -> i128 {
        let prices = Self::get_crypto_prices(env, oracle);
        
        let mut total_value: i128 = 0;
        
        // BTC value
        if let Some(Some((btc_price, _))) = prices.get(0) {
            total_value += (btc_amount * btc_price) / 100_000_000_000_000;
        }
        
        // ETH value
        if let Some(Some((eth_price, _))) = prices.get(1) {
            total_value += (eth_amount * eth_price) / 100_000_000_000_000;
        }
        
        // XLM value
        if let Some(Some((xlm_price, _))) = prices.get(2) {
            total_value += (xlm_amount * xlm_price) / 100_000_000_000_000;
        }
        
        total_value
    }
    
    /// Get prices for stablecoin pairs
    /// Returns USDC/USD and EURC/USD
    pub fn get_stablecoin_prices(
        env: Env,
        oracle: Address,
    ) -> Vec<Option<(i128, u64)>> {
        let mut assets = vec![&env];
        
        assets.push_back((symbol_short!("USDC"), symbol_short!("USD")));
        assets.push_back((symbol_short!("EURC"), symbol_short!("USD")));
        
        let prices: Vec<Option<(i128, u64)>> = env.invoke_contract(
            &oracle,
            &Symbol::new(&env, "lastprices"),
            (assets,).into_val(&env),
        );
        
        prices
    }
}

