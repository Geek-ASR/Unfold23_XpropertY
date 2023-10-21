// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const { ethers } = require("ethers");

// async function connectToAvalanche() {
//   // Connect to MetaMask provider
//   const provider = new ethers.providers.Web3Provider(window.ethereum);

//   // Get the signer (wallet) from MetaMask
//   const signer = provider.getSigner();

//   // Load your contract
//   const contractAddress = "YOUR_CONTRACT_ADDRESS";
//   const contract = new ethers.Contract(contractAddress, YourContractABI, signer);

//   // Now you can interact with your contract using 'contract' object
// }
// const hre = require("hardhat");

// const tokens = (n) => {
//   return ethers.utils.parseUnits(n.toString(), 'ether')
// }

// async function main() {
//   // Setup accounts
//   const [buyer, seller, inspector, lender] = await ethers.getSigners()

//   // Deploy Real Estate
//   const RealEstate = await hre.ethers.getContractFactory('RealEstate')
//   const realEstate = await RealEstate.deploy()
//   await realEstate.deployed()

//   console.log(`Deployed Real Estate Contract at: ${realEstate.address}`)
//   console.log(`Minting 3 properties...\n`)

//   for (let i = 0; i < 3; i++) {
//     const transaction = await realEstate.connect(seller).mint(`https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB/${i + 1}.json`)
//     await transaction.wait()
//   }

//   // Deploy Escrow
//   const Escrow = await hre.ethers.getContractFactory('Escrow')
//   const escrow = await Escrow.deploy(
//     realEstate.address,
//     seller.address,
//     inspector.address,
//     lender.address
//   )
//   await escrow.deployed()

//   console.log(`Deployed Escrow Contract at: ${escrow.address}`)
//   console.log(`Listing 3 properties...\n`)

//   for (let i = 0; i < 3; i++) {
//     // Approve properties...
//     let transaction = await realEstate.connect(seller).approve(escrow.address, i + 1)
//     await transaction.wait()
//   }

//   // Listing properties...
//   transaction = await escrow.connect(seller).list(1, buyer.address, tokens(20), tokens(10))
//   await transaction.wait()

//   transaction = await escrow.connect(seller).list(2, buyer.address, tokens(15), tokens(5))
//   await transaction.wait()

//   transaction = await escrow.connect(seller).list(3, buyer.address, tokens(10), tokens(5))
//   await transaction.wait()

//   console.log(`Finished.`)
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// // main().catch((error) => {
// //   console.error(error);
// //   process.exitCode = 1;
// // });
// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });

//    new1

// const { ethers } = require("ethers");
// const { deploy } = require("hardhat");
// // const { network } = require("hardhat");
// const hre = require("hardhat");

// const tokens = (n) => {
//   return ethers.utils.parseUnits(n.toString(), 'ether');
// }

// async function main() {
//   const signers = await hre.ethers.getSigners();
//   const buyer = signers[0];
//   const seller = signers[1];
//   const inspector = signers[2];
//   const lender = signers[3];


//   // Deploy Real Estate
//   const RealEstate = await deploy.getContractFactory("RealEstate");
//   const realEstate = await RealEstate.deploy();
//   await realEstate.deployed();

//   console.log(`Deployed Real Estate Contract at: ${realEstate.address}`);
//   console.log("Minting 3 properties...\n");

//   for (let i = 0; i < 3; i++) {
//     const tokenURI = `https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB/${i + 1}.json`;
//     const transaction = await realEstate.connect(seller).mint(tokenURI);
//     await transaction.wait();
//   }

//   // Deploy Escrow
//   const Escrow = await deploy.getContractFactory("Escrow");
//   const escrow = await Escrow.deploy(
//     realEstate.address,
//     seller.address,
//     inspector.address,
//     lender.address
//   );
//   await escrow.deployed();

//   console.log(`Deployed Escrow Contract at: ${escrow.address}`);
//   console.log("Listing 3 properties...\n");

//   for (let i = 0; i < 3; i++) {
//     // Approve properties...
//     const approveTransaction = await realEstate.connect(seller).approve(escrow.address, i + 1);
//     await approveTransaction.wait();
//   }

//   // Listing properties...
//   let transaction = await escrow.connect(seller).list(1, buyer.address, tokens(20), tokens(10));
//   await transaction.wait();

//   transaction = await escrow.connect(seller).list(2, buyer.address, tokens(15), tokens(5));
//   await transaction.wait();

//   transaction = await escrow.connect(seller).list(3, buyer.address, tokens(10), tokens(5));
//   await transaction.wait();

//   console.log("Finished.");
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

const { ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
  const signers = await hre.ethers.getSigners();
  const buyer = signers[0];
  const seller = signers[1];
  const inspector = signers[2];
  const lender = signers[3];

  // Deploy Real Estate
  const RealEstate = await ethers.getContractFactory("RealEstate");
  const realEstate = await RealEstate.deploy();
  await realEstate.deployed();

  console.log(`Deployed Real Estate Contract at: ${realEstate.address}`);
  console.log("Minting 3 properties...\n");

  for (let i = 0; i < 3; i++) {
    const tokenURI = `https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB/${i + 1}.json`;
    const transaction = await realEstate.connect(seller).mint(tokenURI);
    await transaction.wait();
  }

  // Deploy Escrow
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(
    realEstate.address,
    seller.address,
    inspector.address,
    lender.address
  );
  await escrow.deployed();

  console.log(`Deployed Escrow Contract at: ${escrow.address}`);
  console.log("Listing 3 properties...\n");

  for (let i = 0; i < 3; i++) {
    // Approve properties...
    const approveTransaction = await realEstate.connect(seller).approve(escrow.address, i + 1);
    await approveTransaction.wait();
  }

  // Listing properties...
  let transaction = await escrow.connect(seller).list(1, buyer.address, tokens(20), tokens(10));
  await transaction.wait();

  transaction = await escrow.connect(seller).list(2, buyer.address, tokens(15), tokens(5));
  await transaction.wait();

  transaction = await escrow.connect(seller).list(3, buyer.address, tokens(10), tokens(5));
  await transaction.wait();

  console.log("Finished.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

