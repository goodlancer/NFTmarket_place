pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

import { ArtNFTDataStorages } from "./art-nft-data/ArtNFTDataStorages.sol";
import { ArtNFT } from "./ArtNFT.sol";

contract ArtNFTData is ArtNFTDataStorages {
    address[] public artAddresses;

    constructor() public {}

    function saveMetadataofArtNFT(
        address[] memory _artAddresses,
        ArtNFT _artNFT,
        string memory _artNFTname,
        string memory _artNFTSymbol,
        string memory _artNFTDetail,
        address _ownerAddress,
        uint _artPrice,
        string memory _ipfsHashOfArt
    ) public returns (bool) {
        Art memory art = Art({
            artNFT: _artNFT,
            artNFTname: _artNFTname,
            artNFTSymbol: _artNFTSymbol,
            artNFTDetail: _artNFTDetail,
            ownerAddress: _ownerAddress,
            artPrice: _artPrice,
            ipfsHashofArt: _ipfsHashOfArt,
            status: 'open',
            reputation: 0
        });
        arts.push(art);

        artAddresses = _artAddresses;
    }

    function updateOwnerOfArtNFT(ArtNFT _artNFT, address _newOwner) public returns (bool) {
        uint artIndex = getArtIndex(_artNFT);

        Art storage art = arts[artIndex];
        require (_newOwner != address(0), "A new ownder address should be not empty");
        art.ownerAddress = _newOwner;
    }

    function updateStatus(ArtNFT _artNFT, string memory _newStatus) public returns (bool) {
        uint artIndex = getArtIndex(_artNFT);
        Art storage art = arts[artIndex];
        art.status = _newStatus;
    }

    function getArt(uint index) public view returns (Art memory _art) {
        Art memory art = arts[index];
        return art;
    }

    function getArtIndex(ArtNFT artNFT) public view returns (uint _artIndex) {
        address ART_NFT = address(artNFT);
        uint artIndex;
        for (uint i=0; i < artAddresses.length; i++) {
            if(artAddresses[i] == ART_NFT) {
                artIndex = i;
            }
        }
        return artIndex;
    }

    function getArtByNFTAddress(ArtNFT artNFT) public view returns (Art memory _art) {
        address ART_NFT = address(artNFT);

        uint artIndex;
        for (uint i=0; i < artAddresses.length; i++) {
            if(artAddresses[i] == ART_NFT) {
                artIndex = i;
            }
        }
        Art memory art = arts[artIndex];
        return art;
    }

    function getAllArts() public view returns (Art[] memory _arts) {
        return arts;
    }

}