// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract ManualToken {
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;

    // transfer : - from sender ,+ to receiver
    function transfer(
        address from,
        address to,
        uint amount
    ) public {
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
    }

    // transferFrom - implement taking funds from user
    function transferFrom(
        address _from,
        address _to,
        uint _value
    ) public returns (bool success) {
        require(_value <= allowance[_from][msg.sender]);
        allowance[_from][msg.sender] -= _value;
        transfer(_from, _to, _value);
        return true;
    }
}
