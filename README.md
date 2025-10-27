# Reflector by Example

> An interactive, hands-on guide to mastering Reflector Oracle integration on Stellar's Soroban platform

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2014-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

**Live Demo**: https://reflector-by-example.vercel.app  
**Repository**: https://github.com/pedro-pelicioni/reflector-by-example

## 🎯 Project Overview

Reflector by Example is a comprehensive learning platform designed to help developers quickly integrate Reflector's decentralized oracle network into their Soroban smart contracts. Inspired by the "by Example" methodology, this project provides practical, production-ready code examples with interactive playgrounds.

### Why This Project?

- **Learning Curve**: Oracle integration can be complex for developers new to Soroban
- **Best Practices**: Scattered documentation makes it hard to find production-ready patterns
- **Interactive Learning**: Developers learn better by seeing and modifying working code
- **Community Growth**: Lowering the barrier to entry increases Reflector adoption

## ✨ Key Features

### 📚 Comprehensive Tutorials

Six complete tutorials covering the entire journey from basics to production:

1. **Introduction to Reflector Oracle**
   - What oracles are and why they're critical for DeFi
   - Reflector's architecture and advantages
   - Available price feeds and use cases

2. **Installation & Setup**
   - Complete Soroban development environment setup
   - Wallet configuration and testnet funding
   - First contract deployment walkthrough

3. **First Oracle Query**
   - Basic price query implementation (BTC/USD)
   - Understanding return values and precision (14 decimals)
   - Asset pair syntax and supported symbols

4. **Production-Ready Price Consumer**
   - Comprehensive error handling with custom error types
   - Staleness validation (5-minute default threshold)
   - Price validation and sanity checks
   - Helper functions for common operations

5. **Multi-Asset Queries**
   - Batch queries using `lastprices` function
   - Portfolio valuation across multiple assets
   - Cross-rate calculations
   - Stablecoin depeg detection
   - Performance optimization strategies

6. **DeFi Lending Protocol**
   - Complete lending protocol implementation
   - Collateral management with 150% ratio
   - Liquidation engine and health factors
   - Interest accrual mechanisms
   - Security considerations and best practices

### 💻 Production-Ready Code

All Rust code examples include:

- ✅ Comprehensive inline documentation
- ✅ Error handling with custom error types
- ✅ Input validation and edge case handling
- ✅ Gas-optimized implementations
- ✅ Security best practices
- ✅ Test-ready structure

### 🎮 Interactive Playground Integration

Each tutorial features an embedded Soroban Playground that allows developers to:

- Edit code directly in the browser
- Compile contracts in real-time
- Deploy to Stellar testnet
- Interact with deployed contracts
- No local setup required for initial exploration

**Technical Implementation**: Uses GitHub Raw URLs to load code snippets into [Soroban Playground](https://soropg.com), enabling seamless integration without CORS issues.

### 🎨 Modern, Developer-Friendly UI

- **Dark Theme**: Easy on the eyes with Reflector brand colors
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Fast Navigation**: Intuitive sidebar with categorized sections
- **Syntax Highlighting**: Beautiful code presentation
- **SEO Optimized**: Discoverability through search engines

## 📊 Technical Architecture

### Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom Reflector theme
- **Content**: MDX (Markdown + React components)
- **Rendering**: Static Site Generation (SSG) for optimal performance
- **Deployment**: Platform-agnostic (Vercel, Netlify, GitHub Pages)

### Project Structure

```
reflector-by-example/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header & Sidebar
│   ├── page.tsx             # Homepage with feature cards
│   └── [slug]/page.tsx      # Dynamic tutorial pages
├── components/              # React components
│   ├── Header.tsx          # Navigation header with social links
│   ├── Sidebar.tsx         # Tutorial navigation sidebar
│   └── Playground.tsx      # Soroban Playground integration
├── content/                # Tutorial MDX files
│   ├── introduction.mdx
│   ├── installation.mdx
│   ├── first-query.mdx
│   ├── price-consumer.mdx
│   ├── multi-asset.mdx
│   └── lending-protocol.mdx
├── snippets/               # Rust code examples
│   ├── first-query.rs
│   ├── price-consumer.rs
│   ├── multi-asset.rs
│   └── lending-protocol.rs
├── lib/                    # Utilities
│   └── content.ts         # MDX content loading
└── public/                # Static assets
    └── logo.png
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Local Development

```bash
# Clone the repository
git clone https://github.com/pedro-pelicioni/reflector-by-example.git
cd reflector-by-example

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000 to see the site locally.

### Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npx serve@latest out
```

The build generates a static site in the `out/` directory, ready for deployment to any static hosting platform.

## 🎯 Use Cases Demonstrated

### DeFi Applications
- **Lending Protocols**: Collateral valuation, liquidation thresholds
- **DEXs**: Fair price discovery, slippage protection
- **Stablecoins**: Peg maintenance and monitoring
- **Yield Aggregators**: Portfolio optimization

### Risk Management
- **Circuit Breakers**: Halt operations during extreme volatility
- **Staleness Checks**: Prevent using outdated price data
- **Multi-Oracle Aggregation**: Redundancy and manipulation resistance
- **Health Monitoring**: Position safety calculations

### Portfolio Management
- **Multi-Asset Valuation**: Calculate total portfolio value
- **Cross-Rate Calculations**: Exchange rates between any asset pairs
- **Rebalancing Triggers**: Automated portfolio rebalancing
- **Performance Tracking**: Historical value tracking

## ⚠️ Known Issue: Playground Integration

**Current Status**: The interactive playground integration uses GitHub Raw URLs to load code snippets. Due to GitHub's current rate limiting on Raw API requests (Error 429), the playgrounds may temporarily fail to load code automatically.

**Reference**: This is a known GitHub infrastructure issue affecting multiple projects ([example issue](https://github.com/webmin/webmin/issues/2575))

**Workaround**: All Rust code examples are available directly in the `/snippets` folder and can be manually copied into the [Soroban Playground](https://soropg.com).

**Expected Resolution**: GitHub rate limits typically reset within 1-24 hours. This is a temporary limitation of using the GitHub Raw CDN.

## 🗺️ Roadmap

### Phase 1: Core Tutorials ✅
- [x] Introduction and installation guides
- [x] Basic query examples
- [x] Production patterns with error handling
- [x] Multi-asset batch queries
- [x] Complete DeFi protocol example

### Phase 2: Advanced Patterns (In Progress)
- [ ] Time-Weighted Average Price (TWAP)
- [ ] Multi-oracle aggregation strategies
- [ ] Price deviation alerts and monitoring
- [ ] Advanced liquidation strategies
- [ ] Cross-chain price feeds

### Phase 3: Additional Use Cases
- [ ] NFT dynamic pricing
- [ ] Options pricing with Black-Scholes
- [ ] Perpetual futures funding rates
- [ ] Insurance protocol parametric triggers
- [ ] Prediction markets

### Phase 4: Developer Tools
- [ ] Code snippet generator
- [ ] Contract testing templates
- [ ] Deployment scripts
- [ ] Monitoring dashboard examples

## 🤝 Contributing

Contributions are welcome! This project aims to be a community resource for learning Reflector integration.

### How to Contribute

1. **Add New Tutorials**
   - Create Rust snippet in `/snippets/your-example.rs`
   - Write MDX tutorial in `/content/your-example.mdx`
   - Add navigation link in `/components/Sidebar.tsx`

2. **Improve Existing Content**
   - Fix typos or clarify explanations
   - Add more code comments
   - Enhance error handling examples

3. **Share Feedback**
   - Open issues for bugs or suggestions
   - Discuss ideas in GitHub Discussions
   - Share on social media

### Contribution Guidelines

- Follow existing code style and formatting
- Include comprehensive comments in Rust code
- Test all code examples before submitting
- Write clear, beginner-friendly explanations
- Add practical use case examples

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

This project is open source and freely available for educational purposes, commercial use, and modification.

## 🔗 Links & Resources

### Reflector Network
- [Official Website](https://reflector.network)
- [Documentation](https://reflector.network/docs)
- [Discord Community](https://discord.com/invite/v2ggfDty2d)
- [Twitter/X](https://x.com/in_reflector)

### Stellar & Soroban
- [Soroban Documentation](https://soroban.stellar.org)
- [Stellar Developers Discord](https://discord.gg/stellardev)
- [Soroban Examples](https://soroban.stellar.org/docs/examples)
- [Stellar Laboratory](https://laboratory.stellar.org)

### Development Tools
- [Soroban Playground](https://soropg.com)
- [Stellar Expert Explorer](https://stellar.expert)
- [Soroban CLI](https://github.com/stellar/soroban-cli)

## 👥 Authors & Acknowledgments

**Created by**: Pedro Pelicioni ([@pedro-pelicioni](https://github.com/pedro-pelicioni))

**Special Thanks**:
- Reflector Network team for building robust oracle infrastructure
- Stellar Development Foundation for Soroban platform
- Soroban by Example for inspiration on tutorial format
- Open source community for invaluable tools and libraries

## 📧 Contact & Support

- **GitHub Issues**: For bugs, feature requests, and technical questions
- **Reflector Discord**: For oracle-specific questions and community support
- **Twitter/X**: [@pedro-pelicioni](https://twitter.com/pedro-pelicioni) for project updates

---

**Built with ❤️ for the Stellar ecosystem**

*Empowering developers to build the next generation of DeFi applications with reliable, decentralized oracle data.*
