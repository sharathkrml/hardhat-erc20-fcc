import { BigNumber } from "ethers"
import { ethers } from "hardhat"
type NetworkConfigType = {
    [key: number]: { name: string; initialSupply: BigNumber }
}
export const networkConfig: NetworkConfigType = {
    31337: {
        name: "hardhat",
        initialSupply: ethers.utils.parseEther("10"),
    },
    4: {
        name: "rinkeby",
        initialSupply: ethers.utils.parseEther("10"),
    },
}
export const developmentChains = ["hardhat", "localhost"]
