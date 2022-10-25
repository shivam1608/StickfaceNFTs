// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.7.3/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.7.3/access/Ownable.sol";
import "@openzeppelin/contracts@4.7.3/utils/Counters.sol";
import "@openzeppelin/contracts@4.7.3/utils/Strings.sol";

contract StickfaceNFT is ERC721, ERC721URIStorage, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // ________ Constants __________
    uint256 public MINT_PRICE = 0.05 ether;
    uint public MAX_SUPPLY = 96;
    // ______________________________

    constructor() ERC721("Stickface NFT", "SFNFT") {}


    function withdraw() public onlyOwner() {
        require(address(this).balance > 0 , "No balance to withdraw!");
        payable(owner()).transfer(address(this).balance);
    }

    function airdrop(address to) public onlyOwner(){
        require(totalSupply() < MAX_SUPPLY , "No NFT left to airdrop!");
        uint256 newMetaId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        _mint(to , newMetaId);
        _setTokenURI(newMetaId , Strings.toString(newMetaId));
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/bafybeiex6ukki2inebdupfpwbnquh2szbotnkgjcp5p3gqnvgxcvhn5eoe/";
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function mintToken(address to) public payable {
        require(totalSupply() < MAX_SUPPLY , "Out of stock! All NFTs are minted");
        require(msg.value >= MINT_PRICE , "Not enough ether sent!");

        uint256 newMetaId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        _mint(to , newMetaId);
        _setTokenURI(newMetaId , Strings.toString(newMetaId));
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    
    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

}
