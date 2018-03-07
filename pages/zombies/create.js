import {
  Form, Input, Select, InputNumber, Switch, Radio,Tooltip,
  Slider, Button, Upload, Icon, Rate,
  Row,Col

} from 'antd';
import { Component } from 'react'
import {observable} from 'mobx';

import ZombieCreator from '../../components/zombiecreator'
import MetaMaskLogin from '../../components/MetaMaskLogin'
import { initStore } from '../../mobx/store'
import { Provider, inject, observer } from 'mobx-react';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;




@inject('store') @observer
class ZombieForm extends Component {

       

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };



SliderChange = (e,index) => {
  console.log(this);
this.props.store.ZombieConfig[index]=e;
      
  };



  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 12 },
    };
    const store = this.props.store


    return (
      <Form onSubmit={this.handleSubmit}>

      
 <FormItem
          {...formItemLayout}
          label={(
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
      

        

        <FormItem
          {...formItemLayout}
          label="Head Gene"
        >
          {getFieldDecorator('slider-head')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7' }}  min={1} max={7} onChange={(e) => this.SliderChange(e, 0) }  />
          )}
        </FormItem>

  <FormItem
          {...formItemLayout}
          label="Eye Gene"
        >
          {getFieldDecorator('slider-eye')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7' }}  min={1} max={7}  onChange={(e) => this.SliderChange(e, 1) } />
          )}
        </FormItem>


  <FormItem
          {...formItemLayout}
          label="Shirt Gene"
        >
          {getFieldDecorator('slider-gene')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6'}}  min={1} max={6}  onChange={(e) => this.SliderChange(e, 2) } />
          )}
        </FormItem>


          <FormItem
          {...formItemLayout}
          label="Skin Color Gene"
        >
          {getFieldDecorator('slider-skin')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7' }}  min={1} max={7}/>
          )}
        </FormItem>


          <FormItem
          {...formItemLayout}
          label="Eye Color Gene"
        >
          {getFieldDecorator('slider-eyecolor')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7' }}  min={1} max={7}/>
          )}
        </FormItem>


          <FormItem
          {...formItemLayout}
          label="Clothes Color Gene"
        >
          {getFieldDecorator('slider-clothescolor')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7' }}  min={1} max={7}/>
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="Dragger"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            )}
          </div>
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
};

    const WrappedDemo = Form.create()(ZombieForm);

export default class CreateZombie extends Component {


  static getInitialProps({ req }) {
    const isServer = !!req   
    const store = initStore(isServer)
    return {
      isServer
    }
  }

  constructor(props) {
    super(props)
    this.store = initStore(props.isServer)    
  }


    getChallenge() {
console.log("Challenger on Parent");
  web3.eth.getAccounts(function(err, accounts){
    if (err != null) console.error("An error occurred: "+err);
    else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
    else console.log("User is logged in to MetaMask");


    console.log(web3.eth.accounts[0]);

});

  this._challenge.text='HAHAHAHAH';
  

     
    }


  myCallback = (dataFromChild) => {
console.log(dataFromChild);    
}


  render() {


    return (

<Provider store={this.props.store}>

    <div>

    <h1>Zombie List</h1>
    <hr/>


   
   <hr/>
    <Row>

      <Col className="gutter-row" span={8}>
  <ZombieCreator store={this.store} />
</Col>
      <Col className="gutter-row" span={16}>

  <WrappedDemo  store={this.store} />
</Col>
    </Row>
    </div>
</Provider>
    )
  }
};




