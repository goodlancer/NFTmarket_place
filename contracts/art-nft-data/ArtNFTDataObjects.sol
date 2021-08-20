pragma solidity ^0.5.16;

import { ArtNFT } from "../ArtNFT.sol";

contract ArtNFTDataObjects {
    struct Art {
        ArtNFT artNFT;
        string artNFTname;
        string artNFTSymbol;
        string artNFTDetail;
        address ownerAddress;
        uint artPrice;
        string ipfsHashofArt;
        string status;
        uint256 reputation;
    }
}