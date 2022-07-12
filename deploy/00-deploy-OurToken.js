const { network } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts() // from hardhat.config.js
    const chainId = network.config.chainId
    if (developmentChains.includes(network.name)) {
        log("local network detected,deploying mocks!!")
    }
    await deploy("OurToken", {
        from: deployer,
        log: true,
        args: [networkConfig[chainId]["initialSupply"]],
    })
}
module.exports.tags = ["all", "token"]
