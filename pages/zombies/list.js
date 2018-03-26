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


    this.state = {
      zombiecount: 0,
      zombies :[]
    };




    this.setZombieCount = this.setZombieCount.bind(this);
    this.setZombies = this.setZombies.bind(this);

 
  }

  componentDidMount() {
    setWeb3Instance();
    this.listZombies();
  }


setZombieCount(zombiecount) {
  this.setState({
    zombiecount: zombiecount
  });
  this.forceUpdate();
}



setZombies(zombies) {
  this.setState({
    zombies: zombies
  });
}






listZombies(){

var abi = ZombieFactoryJsonData.abi;
var contractAddress = ZombieFactoryJsonData.networks["5777"].address;
var MyContract = web3.eth.contract(abi);

var zombiecount = 0;
var zombies=[];
var myContractInstance = MyContract.at(contractAddress);


/*
myContractInstance.createRandomZombie("ZOMBIE 2", function(error, result){
     if(!error)
         console.log(result)
     else
         console.error(error);
 });
*/

myContractInstance.getZombieCount( (error, result) =>{
     if(!error){
        this.zombiecount=parseInt(result);
        this.setZombieCount(parseInt(this.zombiecount));
        console.log(this.zombiecount);
for (var i=0; i < this.state.zombiecount; i++) {
    myContractInstance.getZombie(i, (error, result)=>{
      if(!error){      
        var zombie={};
        zombie=[result[0],result[1].toNumber(),result[2].toNumber(),result[3].toNumber(),result[4].toNumber(),result[5].toNumber()];
        zombies.push(zombie);
        this.setZombies(zombies);
      }
      else{
        console.error(error);
      }
 });

    } 


        console.log("ZOMBIE COUNT: "+parseInt(this.state.zombiecount));
        console.log("ZOMBIES: "+this.state.zombies);

     }else{
         console.error(error);
      }
 });







}





render() {


                 return (
<Row>         

<h2>There are total <strong>{this.state.zombiecount}</strong> Zombies in our blockchain.</h2><br/><hr/><br/>

{this.state.zombies && this.state.zombies.map((zombie,index) => {



return (
  

   <Col span={8} key={index}>

 <Card
    style={{ width: 300 }}
    onClick={this.getChallenge}
    cover={<img alt="example" src="/static/images/zombies/tester-bg@2x.png" />}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={zombie[0]}
      description="This is the description"/>
      DNA: {zombie[1]}<br/>
      Level: {zombie[2]}<br/>
      ReadyTime: {zombie[3]}<br/>
      WinCount: {zombie[4]}<br/>
      LossCount: {zombie[5]}

  </Card>
</Col>



  )


})}


</Row>

     );
  }
}

/*



<Col key="index"> 
  {zombie[0]}
  {zombie[1]}
  {zombie[2]}
  {zombie[3]}
  {zombie[4]}
  {zombie[5]}
</Col>
*/



