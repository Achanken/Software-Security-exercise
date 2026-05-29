const { ethers } = require("hardhat"); 
  
async function main() { 
    const Token = await ethers.getContractFactory("LabToken"); 
    const contract = await Token.deploy(); 
    await contract.waitForDeployment(); 
    console.log("Contract deployed to:", await contract.getAddress()); 
} 
  
main().catch((err) => { console.error(err); process.exit(1); });
