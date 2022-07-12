import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { deployments, ethers } from "hardhat"
import { OurToken } from "../../typechain-types"
import { assert } from "chai"
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
    describe("Constructor", () => {
        it("checks Name", async () => {
            let name = await ourToken.name()
            assert.equal("OurToken", name)
        })
        it("checks Symbol", async () => {
            let symbol = await ourToken.symbol()
            assert.equal("OT", symbol)
        })
        it("check minting on constructor", async () => {
            let balance = await ourToken.balanceOf(deployer.address)
            assert.equal(balance.toString(), ethers.utils.parseEther("10").toString())
        })
    })
})
