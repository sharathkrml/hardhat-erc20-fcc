import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { deployments, ethers } from "hardhat"
import { OurToken } from "../../typechain-types"
describe("OurToken Unit Test", () => {
    let ourToken: OurToken
    let deployer: SignerWithAddress
    let account1: SignerWithAddress
    let accounts: SignerWithAddress[]
    beforeEach(async () => {
        ;[deployer, account1, ...accounts] = await ethers.getSigners()
        await deployments.fixture(["all"]) // deploy all contracts with all tag,execute deployment as fixture for test
        ourToken = await ethers.getContract("OurToken", deployer)
    })
    it("prints acc", async () => {})
})
