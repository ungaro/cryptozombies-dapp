import { Component } from 'react'

import { initStore } from '../../mobx/store'
import Page from '../../components/page'

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

    <h1>Zombie List</h1>
    <hr/>
 <Row>

  {[...Array(10)].map((x, i) =>

      <Col span={8}>

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


