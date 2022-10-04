module.exports = {
  database: [
    {
      kind: "sqlite",
    },
  ],
  sources: [
    {
      kind: "evm",
      name: "WETH",
      chainId: 1,
      rpcUrl: process.env.PONDER_RPC_URL_1,
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      abi: "./abis/WETH.json",
      startBlock: 15673000,
    },
  ],
  apis: [{ kind: "graphql", default: true, port: 42069 }],
};