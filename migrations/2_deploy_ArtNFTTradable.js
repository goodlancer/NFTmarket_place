const ArtNFTTradable = artifacts.require("./ArtNFTTradable.sol");

module.exports = async function(deployer){
    await deployer.deploy(ArtNFTTradable)
}