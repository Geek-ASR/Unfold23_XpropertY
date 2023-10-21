// require("@nomicfoundation/hardhat-toolbox");

// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");

// const { https://api.avax-test.network/ext/bc/C/rpc } = process.env;

// module.exports = {
//   networks: {
//     fuji: {
//       url: https://api.avax-test.network/ext/bc/C/rpc,
//       chainId: 43113,  // Avalanche Fuji C-Chain chain ID
//       gas: 2100000,   // Gas limit
//       gasPrice: 470000000000, // Gas price in wei (470 Gwei)
//       from: "0x0191300af3F158b0216654A37d29bF58D6585907",  // Replace with your Metamask address
//       accounts: [],    // Remove any accounts from the list
//     },
//   },
//   solidity: {
//     version: "0.8.0",
//   },
// };
//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,  // Avalanche Fuji C-Chain chain ID
      gas: 2100000,   // Gas limit
      gasPrice: 470000000000, // Gas price in wei (470 Gwei)
      from: "0x0191300af3F158b0216654A37d29bF58D6585907",  // Replace with your Metamask address
      accounts: { 
        mnemonic: "your twelve word mnemonic here as juv rtyui vho aar cvbhj wsxc"
      },
    },
  },
  solidity: {
    version: "0.8.1",
  },
};
