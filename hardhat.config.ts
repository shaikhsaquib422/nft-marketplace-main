import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "dotenv/config";

const SEPOLIA_URL = process.env.SEPOLIA_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

console.log("Seplia URL", SEPOLIA_URL);

// const GOERLI_URL = process.env.GOERLI_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.11",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
    // GOERLI CAN BE USED IF SEPOLIA FAILS USING ""
    // goerli: {
    //   url: GOERLI_URL,
    //   accounts: [PRIVATE_KEY],
    // },
  },
};

export default config;
