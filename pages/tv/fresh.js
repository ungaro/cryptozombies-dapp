import { Component } from 'react'

import { initStore } from '../../mobx/store'
import Page from '../../components/page'

import { Card, Icon, Avatar, Button,Slider, Switch,Layout, Menu  } from 'antd';
const { Header, Sider, Content } = Layout;
const { Meta } = Card;

export default class Fresh extends Component {
  static async getInitialProps({ req }) {
    //const res = await fetch(process.env.BACKEND_URL + '/fresh')
    const res = await fetch('http://localhost:3020/api/shows/fresh')
    const shows = await res.json()
    const isServer = !!req
    const store = initStore(isServer, shows)
    return {
      shows,
      isServer
    }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer, props.shows)
  }

  render() {
    return (
      <Page type='fresh' store={this.store}>        

 <Card
    style={{ width: 300 }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"/>
  </Card>

Head Gene:
            <Slider min={1} max={7}  />

Eye Gene:1
Shirt Gene:6
Skin Color Gene:0
Eye Color Gene:126
Clothes Color Gene:58
                    <div  className={`get`}>GET</div>
                    <div  className={`verify`}>VERIFY</div>

</Page>
    )
  }
}