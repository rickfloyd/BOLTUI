export interface UtilityToken {
  name: string;
  symbol: string;
  contractAddress: string;
  chain: string;
  apiId: string;
}

export const utilityTokens: UtilityToken[] = [
  {
    name: "Chainlink",
    symbol: "LINK",
    contractAddress: "0x514910771af9ca656af840dff83e8264ecf986ca",
    chain: "Ethereum",
    apiId: "chainlink",
  },
  {
    name: "The Graph",
    symbol: "GRT",
    contractAddress: "0xc944e90c64b2c2c7e0e2f0f0f0f0f0f0f0f0f0f0",
    chain: "Ethereum",
    apiId: "the-graph",
  },
  {
    name: "Ocean Protocol",
    symbol: "OCEAN",
    contractAddress: "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
    chain: "Ethereum",
    apiId: "ocean-protocol",
  },
  {
    name: "Band Protocol",
    symbol: "BAND",
    contractAddress: "0xba11d744d6eec97e8b945f5a5a8f3f3f3f3f3f3f",
    chain: "Ethereum",
    apiId: "band-protocol",
  },
  {
    name: "Morpheus Network",
    symbol: "MNW",
    contractAddress: "0xd3e4ba569045546d09cf021ecc5dfe42b1d7f6e4",
    chain: "Ethereum",
    apiId: "morpheus-network",
  },
  {
    name: "Akash Network",
    symbol: "AKT",
    contractAddress: "Native",
    chain: "Cosmos",
    apiId: "akash-network",
  },
  {
    name: "Render Network",
    symbol: "RNDR",
    contractAddress: "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
    chain: "Ethereum",
    apiId: "render-token",
  },
  {
    name: "Flux Protocol",
    symbol: "FLUX",
    contractAddress: "0x720cd16b011b987da3518fbf38c3071d4f0dcd2e",
    chain: "Ethereum",
    apiId: "zel",
  },
  {
    name: "Aleph.im",
    symbol: "ALEPH",
    contractAddress: "0x27702a26126e0b3702af63ee09ac4a7e292ba6e5",
    chain: "Ethereum",
    apiId: "aleph",
  },
  {
    name: "Covalent",
    symbol: "CQT",
    contractAddress: "0xD417144312DbF50465b1C641d016962017Ef6240",
    chain: "Ethereum",
    apiId: "covalent",
  },
  {
    name: "GraphLinq Protocol",
    symbol: "GLQ",
    contractAddress: "0x6b9f031d718dded0d621c5f3e1f5b3a0d3f3f3f3",
    chain: "Ethereum",
    apiId: "graphlinq-protocol",
  },
  {
    name: "Biconomy",
    symbol: "BICO",
    contractAddress: "0xf17e65822b5687a4c3d4f3f3f3f3f3f3f3f3f3f3",
    chain: "Ethereum",
    apiId: "biconomy",
  },
  {
    name: "Pocket Network",
    symbol: "POKT",
    contractAddress: "Native",
    chain: "Pocket",
    apiId: "pocket-network",
  },
  {
    name: "Ankr",
    symbol: "ANKR",
    contractAddress: "0x8290333ceF9e6D528dD5618Fb97a76f268f3edd4",
    chain: "Ethereum",
    apiId: "ankr",
  },
];
