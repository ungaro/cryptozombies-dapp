import { Component } from 'react'

import { initStore } from '../../mobx/store'
import Page from '../../components/page'

import { Card, Icon, Avatar, Button,Slider, Switch,Layout, Menu,Row, Col  } from 'antd';

import { setWeb3Instance } from '../../services/blockChainService'

const { Header, Sider, Content } = Layout;
const { Meta } = Card;
import ZombieFactoryJsonData from "../../build/contracts/ZombieFactory.json";



export default class ListZombie extends Component {


  constructor (props) {
    super(props)
    console.log("LIST ZOMBIES");

    //this.store = initStore(props.isServer, props.shows)
  }


  componentDidMount(prevProps, prevState, prevContext) {
    setWeb3Instance();
    this.listZombies();

  }

listZombies(){
    console.log("LIST ZOMBIES FUNCTION");


var abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "zombies",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "dna",
          "type": "uint256"
        },
        {
          "name": "level",
          "type": "uint32"
        },
        {
          "name": "readyTime",
          "type": "uint32"
        },
        {
          "name": "winCount",
          "type": "uint16"
        },
        {
          "name": "lossCount",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "zombieToOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "createRandomZombie",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getZombieCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getZombie",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint32"
        },
        {
          "name": "",
          "type": "uint32"
        },
        {
          "name": "",
          "type": "uint16"
        },
        {
          "name": "",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "zombieId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "dna",
          "type": "uint256"
        }
      ],
      "name": "NewZombie",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ];

 
var contractAddress = "0x4c543bbb8386d423c72c4c51d0815d81c57fb7e2";

//var abi = ZombieFactoryJsonData.abi;
//var contractAddress = ZombieFactoryJsonData.networks["5777"].address;

//var contract = web3.eth.contract(abi);

var MyContract = web3.eth.contract(abi);

// initiate contract for an address
var myContractInstance = MyContract.at(contractAddress);
console.log("INSTANCE:"+myContractInstance);

console.log(abi);
console.log(contractAddress);





myContractInstance.createRandomZombie("ALP TEST 2", function(error, result){
     if(!error)
         console.log(result)
     else
         console.error(error);
 });
 

myContractInstance.getZombieCount( function(error, result){
     if(!error)
         console.log(result)
     else
         console.error(error);
 });


myContractInstance.getZombie("0", function(error, result){
     if(!error)
         console.log(result)
     else
         console.error(error);
 });

/*


myContractInstance.createRandomZombie("ALP TEST", function(error, result){
     if(!error)
         console.log(result)
     else
         console.error(error);
 });

contract.createRandomZombie("ALP TEST", function(error, result){
     if(!error)
         console.log(result)
     else
         console.error(error);
 });

 contract.getZombieCount((_err,_resp) => {
        if (_err != null) {
            console.log(_err);
        } else {
console.log(_resp);
        }
    });

 contract.zombies(0,(_err,_resp) => {
        if (_err != null) {
            console.log(_err);
        } else {
console.log(_resp);
        }
    });


 contract.zombies.length((_err,_resp) => {
        if (_err != null) {
            console.log(_err);
        } else {
console.log(_resp);
        }
    });

 */
/*
contract.createRandomZombie("ALP TEST", function(error, result){
     if(!error)
         console.log(result)
     else
         console.error(error);
 });
 */

//contract.createRandomZombie();
/*
var randomzombie = contract.createRandomZombie("ALP TEST").call().then(function(v) {
var strName= v.toString();
console.log("Name: "+ strName);   
});
*/










/*
var MyContract = web3.eth.contract(abi);

// initiate contract for an address
var myContractInstance = MyContract.at('0xb0088bcd17575366784c4632e8c6cfee3afb197a');
console.log("INSTANCE:"+myContractInstance);


var result = myContractInstance._createZombie("TEST","1234567890123456",function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
});



Available Accounts
==================
(0) 0x054357c3f98d111c725820389ba23bac8cceca1d
(1) 0x8c419f6abcb52daf327b3af578e298e994188cf7
(2) 0xc76b1fd78b801bb641cc3482637fb1aeb5347a69
(3) 0x1142ee740a7c7305c7110cc7ddc3ad3e1c772e44
(4) 0x70ee7439155028e71223570c6c9643c665ff7480
(5) 0xc9288c29996d91dcdc9835c7f3d0e44c43858b2f
(6) 0x346b40ce22ee438159b104c89cc8e8721deee188
(7) 0x5b4dd0bcb80119eb3b5b348a74f55aa201cf8bf9
(8) 0xa17688a5c70e0a8bf4c15ae9383f9ceced155755
(9) 0xeac6e1e45607c3573e53ab1dff3bf4fa20edde2b


console.log("TRANSACTIONS");
var filter = web3.eth.filter({fromBlock:0, toBlock:'latest', address: "0xb0088bcd17575366784c4632e8c6cfee3afb197a"});
filter.get(function (err, transactions) {
  console.log("FILTER");
  console.log(transactions);
  transactions.forEach(function (tx) {
    var txInfo = web3.eth.getTransactionReceipt(tx.transactionHash);
    console.log("TXINFO");
    console.log(txInfo);
    console.log(txInfo.contractAddress);
    console.log(txInfo.from);
    console.log(txInfo.input);


  });
});

*/

//console.log(result) // '0x25434534534'

/*
// call constant function (synchronous way)
var owner = myContractInstance.owner.call(function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
});
*/



//console.log("owner="+owner);

}
    getChallenge() {

console.log("Challenge accepted");
}

  render() {
    return (
    
    <div>

    <h1>Zombie List</h1>
    <hr/>
 <Row>

  {[...Array(10)].map((x, i) =>

      <Col span={8} key={i}>

 <Card
    style={{ width: 300 }}
    onClick={this.getChallenge}
    cover={<img alt="example" src="/static/images/zombies/tester-bg@2x.png" />}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"/>
  </Card>
</Col>
  )}
   </Row>
    </div>
    )
  }
}


