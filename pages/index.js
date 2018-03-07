import { Component } from 'react'

import { initStore } from '../mobx/store'
import Page from '../components/page'
import MetaMaskLogin from '../components/MetaMaskLogin'

import { Card, Icon, Avatar, Button,Slider, Switch,Layout, Menu,Row, Col  } from 'antd';
const { Header, Sider, Content } = Layout;
const { Meta } = Card;



export default class ListZombie extends Component {


  constructor (props) {
    super(props)
    //this.store = initStore(props.isServer, props.shows)
  }



    getChallenge() {

		console.log("Challenge accepted");
}

  render() {
    return (
    
    <div>

    <h1>Hello World</h1>
    <hr/>
  <MetaMaskLogin />
    </div>
    )
  }
}


