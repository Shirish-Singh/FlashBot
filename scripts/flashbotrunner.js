const hre = require('hardhat')

async function main() {
  let flashLoanPoolAddress = "0xaaE10Fa31E73287687ce56eC90f81A800361B898"
  let loanAmt = ethers.utils.parseUnits("100", 18);
  let loanTokenAddress = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"

  const FlashBot = await hre.ethers.getContractFactory('FlashLoan')
  const fb = await FlashBot.deploy()

  await fb.deployed()

  await fb.dodoFlashLoan(flashLoanPoolAddress, loanAmt, loanTokenAddress)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

