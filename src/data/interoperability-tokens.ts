export interface InteroperabilityToken {
  name: string;
  symbol: string;
  contractAddress: string;
  chain: string;
  coinGeckoId: string;
  apiEndpoint: string;
}

export const interoperabilityTokens: InteroperabilityToken[] = [
  {
    name: "Synapse",
    symbol: "SYN",
    contractAddress: "0x0f2d719407fdbeff09d87557abb7232601fd9f29",
    chain: "Ethereum",
    coinGeckoId: "synapse",
    apiEndpoint: "https://api.coingecko.com/api/v3/coins/synapse",
  },
  {
    name: "Multichain",
    symbol: "MULTI",
    contractAddress: "0x9c891326fd8b1a713974f73bb604677e199dcfef",
    chain: "Ethereum",
    coinGeckoId: "multichain",
    apiEndpoint: "https://api.coingecko.com/api/v3/coins/multichain",
  },
  {
    name: "Stargate Finance",
    symbol: "STG",
    contractAddress: "0x2f6f07cdcf3588944bf4c42ac74ff1a7a5f58ec3",
    chain: "Ethereum",
    coinGeckoId: "stargate-finance",
    apiEndpoint: "https://api.coingecko.com/api/v3/coins/stargate-finance",
  },
  {
    name: "Celer Network",
    symbol: "CELR",
    contractAddress: "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667",
    chain: "Ethereum",
    coinGeckoId: "celer-network",
    apiEndpoint: "https://api.coingecko.com/api/v3/coins/celer-network",
  },
  {
    name: "Hop Protocol",
    symbol: "HOP",
    contractAddress: "0xc5102fE9359FD9a28fA4A0E4b6C4bA4eC1f3fE3c",
    chain: "Ethereum",
    coinGeckoId: "hop-protocol",
    apiEndpoint: "https://api.coingecko.com/api/v3/coins/hop-protocol",
  },
  {
    name: "LayerZero (via STG)",
    symbol: "STG",
    contractAddress: "0x2f6f07cdcf3588944bf4c42ac74ff1a7a5f58ec3",
    chain: "Ethereum",
    coinGeckoId: "stargate-finance",
    apiEndpoint: "https://api.coingecko.com/api/v3/coins/stargate-finance",
  },
  {
    name: "deBridge",
    symbol: "DBR",
    contractAddress: "0xE261D618a959aFfFd53168Cd07D12e37B26761db",
    chain: "Ethereum",
    coinGeckoId: "debridge",
    apiEndpoint: "https://api.coingecko.com/api/v3/coins/debridge",
  },
  {
    name: "Wormhole (Wrapped)",
    symbol: "WH",
    contractAddress: "Varies by chain (wrapped assets)",
    chain: "Multichain",
    coinGeckoId: "wormhole",
    apiEndpoint: "https://api.coingecko.com/api/v3/coins/wormhole",
  },
  {
    name: "ChainPort",
    symbol: "PORTX",
    contractAddress: "0x6eA0b3e6aB9A2eD2aFfF3e3f3e3f3e3f3e3f3e3f",
    chain: "Ethereum",
    coinGeckoId: "chainport",
    apiEndpoint: "https://api.coingecko.com/api/v3/coins/chainport",
  },
  {
    name: "Connext",
    symbol: "NEXT",
    contractAddress: "0xFE67A4450907459c7aD4aD6f8fF3fF3fF3fF3fF3f",
    chain: "Ethereum",
    coinGeckoId: "connext",
    apiEndpoint: "https://api.coingecko.com/api/v3/coins/connext",
  },
];
