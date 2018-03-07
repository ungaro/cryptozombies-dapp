import React from 'react'
import { Component } from 'react'


import { inject, observer } from 'mobx-react';
import Notification  from '../components/notification';
import map from 'lodash/map'
import some from 'lodash/some'
import get from 'lodash/get'
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button, Card, Icon, Avatar,Layout, Menu, Breadcrumb} from 'antd'
import axios from 'axios'
import Router from 'next/router'

import jwtDecode from 'jwt-decode';
import { setCookie, getCookie,doesCookieExist, removeCookie } from '../utils/CookieUtils'
import jwt from 'jsonwebtoken'



export default class MetaMaskLogin extends React.Component {


  constructor(props, context){
    super(props, context);
    this.state = {challenge: ''};
    this.setChallenge = this.setChallenge.bind(this);
    this.setWeb3Install = this.setWeb3Install.bind(this);
  }



  componentDidMount(prevProps, prevState, prevContext) {

    if (typeof web3 == 'undefined') {
      console.log('NO WEB3 PLEASE INSTALL METAMASK');
      this.setWeb3Install(false);
    } else if (web3.version.network == 'loading') {
      console.log('Wrong Network');
    } else {
      console.log('METAMASK INSTALLED');
      this.setWeb3Install(true);
      if (doesCookieExist('x-access-token')){
        console.log("DO AUTO LOGIN");
        this.decodeToken();
      }
      console.log("TOKENS HERE");
    }

  }

  clickEventHandler(e) {
    this.props.onClick(e);
  }


  handleClick = ({ key }) => {

  if (key === 'user') {
    console.log('something')
  }
}



testchallenge(test) {
  console.log(test);

}


setWeb3Install(propertyTextToAdd) {
  this.setState({
    web3Install: propertyTextToAdd
  });
}

setChallenge(propertyTextToAdd) {
  this.setState({
    challenge: propertyTextToAdd
  });

}


decodeToken(){
  const token = getCookie('x-access-token');
  const decoded = jwtDecode(token);
  console.log(decoded);
  console.log(decoded.challenge);
  console.log(decoded.signature);

if (decoded.signature!=""){

    Router.push({
        pathname: '/zombies/list'
      })
}else{
  removeCookie('x-access-token');

}
/*
  axios.get('http://localhost:3020/auth/' + decoded.challenge + '/' + decoded.signature)
  .then((response) => {

    console.log(web3.eth.accounts[0]);
    console.log(response.data);
    if (response.data.success === true) {
        //$('.success').show();
        console.log("SUCCESS LOGIN");



      } else {
        console.log("FAIL LOGIN");
      }
    });
*/

}

setSignature(signature) {
  this.setState({
    signature: signature
  });

}


verify() {

  axios.get('http://139.162.188.66:3020/auth/' + this.state.challenge[1].value + '/' + this.state.signature)
  .then((response) =>{

    if (response.data.success === true) {
      console.log("SUCCESS LOGIN");
      var token = jwt.sign({
        challenge: this.state.challenge[1].value,
        signature: this.state.signature
      }, 'jwtSecret', {
        expiresIn: 60*60
      });
      setCookie('x-access-token', token);

      Router.push({
        pathname: '/zombies/list'
      })

    } else {
      console.log("FAIL LOGIN");
    }
  });


}



getChallenge() {





  web3.version.getNetwork((err, netId) => {
    switch (netId) {
      case "1":
      console.log('This is mainnet')
      break
      case "2":
      console.log('This is the deprecated Morden test network.')
      break
      case "3":
      console.log('This is the ropsten test network.')
      break
      case "4":
      console.log('This is the Rinkeby test network.')
      break
      case "42":
      console.log('This is the Kovan test network.')
      break
      case "5777":
      console.log('This is the CryptoZombies test network.')
      break

      default:
      console.log('This is an unknown network.')
    }
  })



  web3.eth.getAccounts((err, accounts) => {

    if (err != null) {
    	console.error("An error occurred: "+err);
    }else if (accounts.length == 0) {
      alert("Please login to MetaMask")

    }else{
    	console.log("User is logged in to MetaMask");
    	console.log("Default address:"+web3.eth.accounts[0]);
    	

      axios.get('http://139.162.188.66:3020/auth/'+web3.eth.accounts[0])
      .then((response) => {


        var token = jwtDecode(response.data.token);
        var challenge = token.challenge;
       this.setChallenge(challenge);

        const from = web3.eth.accounts[0];
        const params = [challenge, from];

        const method = 'eth_signTypedData';

        web3.currentProvider.sendAsync({
          method,
          params,
          from
        }, async (err, result) => {

          var signature = result.result;

          if (err) {
            return console.error(err);
          }
          if (result.error) {
           console.log("error coming");
           return console.error(result.error);
         }
         this.setSignature(signature);

this.verify();


       });

        console.log(response.data);




      })
      .catch(function (error) {
        console.log(error);
      });

    	//AXIOS

    }



  });
  


}


render() {
  const isLoggedIn = this.state.isLoggedIn;
  const web3Install = this.state.web3Install;



  const Loggedinbox = () => (
   <Menu  selectedKeys={[]} className="headermenu"    onClick={this.handleClick}>
   <Menu.Item key="user"><Icon type="user" />USER</Menu.Item>
   <Menu.Item key="settings"><Icon type="setting" />Settings</Menu.Item>
   <Menu.Item key="logout"><Icon type="logout" />Logout</Menu.Item>
   </Menu>
   )


  const Loggedoutbox = () => (
   <Menu  selectedKeys={[]} className="headermenu" onClick="this.clickEventHandler.bind(this)">

   <Menu.Item key="login"><Icon type="login" />Login</Menu.Item>
   </Menu>
   )



  return (
    <div>
    <h1 className="success" style={{display: 'none'}}>Authentication Success</h1>
    <h1 className="fail" style={{display: 'none'}}>Authentication Failed</h1>



    {web3Install ? ( <img src="/static/images/login_with_metamask.png" onClick={() => this.getChallenge()} /> ) : ( <a href="https://metamask.io/" target="_blank"><img src="/static/images/download-metamask.png" /></a> )}





      <hr/>


      </div>
      )
    }
  }