pragma solidity ^0.4.0;

contract Lottery {
    address public manager;
    address[] public players;

    function Lottery() public {   
        manager = msg.sender;   
    }
    // spend ether before use this function
    function enter() public  payable {
        require(msg.value > .01 ether);
        
        players.push(msg.sender);
    }
    
    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public restricted {
        uint index = random() % players.length;
        players[index].transfer(this.balance); 
        //re deploy contract
        players = new address[](0);
    }
    // _; คือ เมื่อเราเอา modifier ไปใช้ใน function
    //ไหน _;เป็นการบอกว่าให้code ที่อยู่ในfunction    ต่อจาก code ที่มีใน modifier
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns (address[]) {
        return players;
    }
    
} 