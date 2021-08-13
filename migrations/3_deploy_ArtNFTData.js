const ArtNFTData = artifacts.require("./ArtNFTData.sol");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(ArtNFTData);
};