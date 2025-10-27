import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-indigo-400 mb-4">
          Reflector by Example
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Learn Reflector Oracle through interactive code examples
        </p>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A comprehensive, hands-on guide to building with Reflector's decentralized 
          oracle network on Stellar's Soroban smart contracts. Master price feeds, 
          multi-asset queries, and DeFi integrations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition-colors">
          <h2 className="text-xl font-semibold text-indigo-300 mb-3">
            🚀 Getting Started
          </h2>
          <p className="text-slate-400 mb-4">
            New to Reflector? Start here to understand what oracles are and 
            how to set up your development environment.
          </p>
          <Link 
            href="/introduction" 
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Start Learning →
          </Link>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition-colors">
          <h2 className="text-xl font-semibold text-indigo-300 mb-3">
            💡 Interactive Examples
          </h2>
          <p className="text-slate-400 mb-4">
            Try code directly in your browser with our integrated Soroban Playground. 
            No installation required.
          </p>
          <Link 
            href="/first-query" 
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Try Your First Query →
          </Link>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition-colors">
          <h2 className="text-xl font-semibold text-indigo-300 mb-3">
            🔧 Build Real Apps
          </h2>
          <p className="text-slate-400 mb-4">
            Learn to build production-ready contracts with proper error handling, 
            staleness checks, and multi-asset support.
          </p>
          <Link 
            href="/price-consumer" 
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Build a Price Consumer →
          </Link>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition-colors">
          <h2 className="text-xl font-semibold text-indigo-300 mb-3">
            🏦 DeFi Protocols
          </h2>
          <p className="text-slate-400 mb-4">
            Explore advanced examples like lending protocols, liquidation engines, 
            and dynamic fee mechanisms.
          </p>
          <Link 
            href="/lending-protocol" 
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Explore DeFi Examples →
          </Link>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
          What You'll Learn
        </h2>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 mt-1">✓</span>
            <span>How to query real-time price data from Reflector Oracle</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 mt-1">✓</span>
            <span>Implementing staleness checks and error handling</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 mt-1">✓</span>
            <span>Working with multiple assets and portfolio calculations</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 mt-1">✓</span>
            <span>Building DeFi protocols with oracle integration</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 mt-1">✓</span>
            <span>Understanding price precision and decimal handling</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 mt-1">✓</span>
            <span>Best practices for production deployments</span>
          </li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-400 mb-4">
          Ready to start building with Reflector?
        </p>
        <Link
          href="/introduction"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
