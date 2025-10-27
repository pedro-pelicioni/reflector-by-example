#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env, Symbol, symbol_short};

/// First Query - Your First Reflector Oracle Query
/// 
/// This contract demonstrates how to make a basic price query
/// to the Reflector Oracle network on Stellar/Soroban.

#[contract]
pub struct FirstQuery;

#[contractimpl]
impl FirstQuery {
    /// Query the latest BTC/USD price from Reflector Oracle
    /// 
    /// Returns:
    /// - Option<(i128, u64)>: Price (with 14 decimals) and timestamp
    /// 
    /// Example:
    /// If BTC is $65,432.50, the returned price would be:
    /// 6543250000000000000 (65432.50 * 10^14)
    pub fn get_btc_price(env: Env, oracle: Address) -> Option<(i128, u64)> {
        // Asset symbols
        let base = symbol_short!("BTC");
        let quote = symbol_short!("USD");
        
        // Call the Reflector Oracle's lastprice function
        let price_data: Option<(i128, u64)> = env.invoke_contract(
            &oracle,
            &Symbol::new(&env, "lastprice"),
            (base, quote).into_val(&env),
        );
        
        price_data
    }
    
    /// Get just the price value (without timestamp)
    pub fn get_price_only(env: Env, oracle: Address) -> Option<i128> {
        let base = symbol_short!("BTC");
        let quote = symbol_short!("USD");
        
        let result: Option<(i128, u64)> = env.invoke_contract(
            &oracle,
            &Symbol::new(&env, "lastprice"),
            (base, quote).into_val(&env),
        );
        
        // Extract just the price from the tuple
        result.map(|(price, _timestamp)| price)
    }
}

