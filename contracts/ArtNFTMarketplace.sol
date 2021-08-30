pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

import { SafeMath } from "./openzeppelin-solidity/contracts/math/SafeMath.sol";
import { Strings } from "./libraries/Strings.sol";
import { ArtNFT } from "./ArtNFT.sol";
import { ArtNFTTradable } from "./ArtNFTTradable.sol";
import { ArtNFTMarketplaceEvents } from "./art-nft-marketplace/ArtNFTMarketplaceEvents.sol";
import { ArtNFTData } from "./ArtNFTData.sol";
import { ArtNFTFactory } from "./ArtNFTFactory.sol";

contract ArtNFTmarketplace is ArtNFTTradable, ArtNFTMarketplaceEvents {
    using SafeMath for uint256;

    address public ART_NFT_MARKETPLACE;
    
    ArtNFTData public artNFTData;
    ArtNFTFactory artNFTFactory;
    constructor(ArtNFTData _artNFTData, address _factoryAddress) public ArtNFTTradable(_artNFTData) {
        artNFTData = _artNFTData;
        artNFTFactory = ArtNFTFactory(_factoryAddress);
        address payable ART_NFT_MARKETPLACE = address(uint160(address(this)));
    }

    function buyPhotoNFT(ArtNFT _artNFT) public payable returns (bool) {
        ArtNFT artNFT = _artNFT;
        ArtNFTData.Art memory art = artNFTData.getArtByNFTAddress(artNFT);
        ArtNFTData.ArtDetail memory artDetail = artNFTData.getArtDetailByNFTAddress(artNFT);
        address _seller = art.ownerAddress;
        address payable seller = address(uint160(_seller));
        uint buyAmount = art.artPrice;
        require(msg.value == buyAmount, "msg.value should be equal to the buyAmount");
        seller.transfer(msg.value);

        address buyer = msg.sender;

        uint artId = 1;
        // artNFTFactory.sellingArtNFT(buyer, art.artNFTname, artDetail.artNFTdetail, artDetail.artNFTspfield, art.artNFTSymbol, art.artPrice, art.ipfsHashofArt);
        
        string memory tokenURI = getTokenURL(art.ipfsHashofArt);
        string memory artSymbol = "truhelix";
        ArtNFT artNFT_new = new ArtNFT(buyer, art.artNFTname, artSymbol, artDetail.artNFTdetail, tokenURI, art.artPrice);
        // artAddresses = artNFTData.artAddresses;
        // address[] memory addresses = artNFTData.artAddresses;
        // artAddresses.push(address(artNFT_new));
        address newArtAdd = address(artNFT_new);
        string memory artdetail = artDetail.artNFTdetail;
        string memory artspfield = artDetail.artNFTspfield;
        string memory artname = art.artNFTname;
        string memory hasyipfsofArt = art.ipfsHashofArt;
        uint amount = art.artPrice;
        artNFTData.saveMetadataofArtNFT(artNFT_new, artname, artdetail, artspfield, msg.sender, amount, hasyipfsofArt);
        artNFTData.updateStatus(artNFT_new, "Open");


        // artNFT.approve(buyer, artId);
        // address ownerBeforeOwnershipTransferred = artNFT.ownerOf(artId);

        // // // transferOwnershipOfArtNFT(artNFT, artId, buyer);
        // artNFTData.updateOwnerOfArtNFT(artNFT, buyer);
        // artNFTData.updateStatus(artNFT, "Cancelled");

        // address ownerAfterOwnershipTransferred = artNFT.ownerOf(artId);
        // emit ArtNFTOwnershipChnaged(artNFT, artId, ownerBeforeOwnershipTransferred, ownerAfterOwnershipTransferred);
        emit ArtNFTOwnershipChnaged(artNFT_new, _seller, buyer);
    }
    
    function ArtNFTUpdate(ArtNFT _artNFT, string memory title, string memory detail) public returns (bool) {
        ArtNFT artNFT = _artNFT;
        uint artId = 1;
        ArtNFTData.Art memory art = artNFTData.getArtByNFTAddress(artNFT);
        artNFTData.UpdateArtdata(artNFT, title, detail);
        
        emit ArtUpdated(artNFT, artId);
    }

    function reputation(address from, address to, uint256 artId) public returns (uint256, uint256) {
        return (0, 0);
    }

    function getReputationCount(uint256 artId) public view returns (uint256) {
        uint256 currentReputationCount;

        return currentReputationCount;
    }

    function baseTokenURI() public pure returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    function getTokenURL(string memory _ipfsHashOfPhoto) public view returns (string memory) {
        return Strings.strConcat(baseTokenURI(), _ipfsHashOfPhoto);
    }
}