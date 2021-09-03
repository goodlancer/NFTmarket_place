const ArtNFTmarketplace = artifacts.require('./ArtNFTMarketplace.sol');
const ArtNFTdata = artifacts.require('./ArtNFTData.sol');
const ArtNFTFactory = artifacts.require('./ArtNFTFactory.sol');

const _artNFTData = ArtNFTdata.address;
const _artNFTFactory = ArtNFTFactory.address;

module.exports = async function(deployer) {
    await deployer.deploy(ArtNFTmarketplace, _artNFTData, _artNFTFactory);
};