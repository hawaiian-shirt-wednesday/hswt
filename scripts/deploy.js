const hre = require("hardhat");

async function main() {
  const DevToken = await hre.ethers.getContractFactory("HawaiianShirtWednesdayToken");
  const devToken = await DevToken.deploy("10000000000000000000000");

  await devToken.waitForDeployment();

  console.log("Token deployed to:", await devToken.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });