const { ethers } = require("hardhat")

const networkConfig = {
    31337: {
        name: "hardhat",
        initialSupply: ethers.utils.parseEther("10"),
    },
    4: {
        name: "rinkeby",
        initialSupply: ethers.utils.parseEther("10"),
    },
}
const developmentChains = ["hardhat", "localhost"]

module.exports = { networkConfig, developmentChains }
