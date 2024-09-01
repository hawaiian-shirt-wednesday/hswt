// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract HawaiianShirtWednesdayToken is ERC20Capped, Ownable {
    constructor(uint256 cap) ERC20("HawaiianShirtWednesdayToken", "HSWT") ERC20Capped(cap) Ownable(msg.sender) {}

    function issueToken(address receiver, uint8 tokenCount) public onlyOwner {
        _mint(receiver, tokenCount * 10**18);
    }
}