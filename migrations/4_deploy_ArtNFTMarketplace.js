const ArtNFTmarketplace = artifacts.require('./ArtNFTMarketplace.sol');
const ArtNFTdata = artifacts.require('./ArtNFTData.sol');

const _artNFTData = ArtNFTdata.address;

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(ArtNFTmarketplace, _artNFTData);
};