import Document, { Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

import flush from 'styled-jsx/server'
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button, Card, Icon, Avatar,Layout, Menu, Breadcrumb} from 'antd'
import stylesheet from 'antd/dist/antd.min.css'
import GlobalHeader  from '../components/GlobalHeader'
import MetaMaskLogin  from '../components/MetaMaskLogin'
import withApp  from '../components/MetaMaskTest'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const FormItem = Form.Item
const Option = Select.Option


//export default class MyDocument extends Document {
export default class MyDocument extends Document {


  


  handleClick = (e) => {
    console.log('click ', e);
  }



  state = {
    collapsed: false,
  };






  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
 };





  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }



  render () {
    return (
<html>
       <Head>
         <style>{`body { margin: 0 } html { font-family: Roboto, sans-serif; -webkit-font-smoothing: antialiased; }`}</style>
         <meta charSet='utf-8' />
         <meta name='viewport' content='initial-scale=1.0, width=device-width' />
         <link href='//fonts.googleapis.com/css?family=Roboto' rel="stylesheet" />
         <link href='//cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' rel='stylesheet' />
         <script src='/static/js/web3.min.js'></script>
        <link rel='stylesheet' href='/static/css/style.css' />
        


      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

       </Head>
       <body>


<section  id="page-component"><Layout  className="layoutbig">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline"  onClick={this.handleClick()}>
            <Menu.Item key="1">
                                 <Link href="/zombies/list" className="nav-text">Zombies List</Link>

            </Menu.Item>
            <Menu.Item key="2">

                                             <Link href="/zombies/create" className="nav-text">Create a New Zombie</Link>


            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Battle</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>

   
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
               <Main />
         <NextScript />
          </Content>
        </Layout>
      </Layout></section>


      
       </body>
     </html>



    )
  }
}


