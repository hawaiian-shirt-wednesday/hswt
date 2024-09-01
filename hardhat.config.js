require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: `${process.env.POLYGON_AMOY_NETWORK_URL}`,
      accounts: [`0x${process.env.WALLET_PRIVATE_KEY}`]
    },
    polygon: {
      url: `${process.env.POLYGON_MAIN_NETWORK_URL}`,
      accounts: [`0x${process.env.WALLET_PRIVATE_KEY}`]
    }
  },

  etherscan: {
    apiKey: {
      polygon: `${process.env.POLYGONSCAN_API_KEY}`,
      polygonAmoy: `${process.env.POLYGONSCAN_API_KEY}`
    }
  }
};
