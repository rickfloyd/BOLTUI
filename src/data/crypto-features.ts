export interface CryptoFeature {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const cryptoFeatures: CryptoFeature[] = [
  {
    id: "real_time_dex_data",
    title: "Real-Time DEX Data",
    description: "Live prices, slippage, and liquidity from Uniswap, PancakeSwap, and other DEXs.",
    tags: ["DEX", "liquidity", "slippage", "volume"]
  },
  {
    id: "consensus_mining_intel",
    title: "Consensus & Mining Intelligence",
    description: "Hash algorithm, mining status, GPU/ASIC flags for PoW coins.",
    tags: ["PoW", "mining", "hashrate"]
  },
  {
    id: "smart_contract_scanner",
    title: "Smart Contract Code Scanner",
    description: "Detects verified contracts, proxy patterns, upgradeability, and key functions.",
    tags: ["EVM", "security", "contracts"]
  },
  {
    id: "canonical_token_validator",
    title: "Canonical Token Validator",
    description: "Validates CoinGecko ID, consensus, contract, and metadata.",
    tags: ["validation", "metadata", "canonical"]
  },
  {
    id: "onchain_metrics_dashboard",
    title: "On-Chain Metrics Dashboard",
    description: "Track active addresses, gas fees, validator count, and treasury balances.",
    tags: ["on-chain", "analytics", "metrics"]
  },
  {
    id: "token_patch_override",
    title: "Token Patch & Override System",
    description: "Patch broken tokens, submit metadata fixes, and vote on canonical status.",
    tags: ["patching", "community", "governance"]
  },
  {
    id: "ai_token_classifier",
    title: "AI-Powered Token Classifier",
    description: "Auto-tags tokens as DAOs, bridges, infra, privacy, meme, wrapped, etc.",
    tags: ["AI", "classification", "taxonomy"]
  },
  {
    id: "custom_index_builder",
    title: "Custom Index Builder",
    description: "Create and chart your own token baskets: DAOs, PoW, L2s, etc.",
    tags: ["index", "portfolio", "custom"]
  },
  {
    id: "experimental_token_lab",
    title: "Experimental Token Lab",
    description: "Track new deployments, simulate forks, and test token behavior.",
    tags: ["sandbox", "testing", "forks"]
  },
  {
    id: "security_rug_scanner",
    title: "Security & Rug Risk Scanner",
    description: "Detect honeypots, unverified contracts, and liquidity locks.",
    tags: ["security", "rugpull", "audit"]
  }
];
