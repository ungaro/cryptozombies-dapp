import { Component } from 'react'
import { Provider } from 'mobx-react'

import { Card, Icon, Avatar, Button,Slider, Switch,Layout, Menu  } from 'antd';
const { Header, Sider, Content } = Layout;


import { setWeb3Instance, getBookmarks } from '../services/blockChainService'
import Shows from '../components/shows'
import Nav from '../components/navigation'

const { Meta } = Card;

class Page extends Component {

    componentDidMount() {




        setWeb3Instance()
       // .then(() => getBookmarks())
       // .then(shows => this.props.store.setBookmarkShows(shows))
    }


    render() {
        return (
            <Provider store={this.props.store}>
 


                <div>

                    <Nav selected={this.props.type} />
                    <Shows {...this.props.store} />
                </div>
            </Provider>
        )
    }
}

export default Page