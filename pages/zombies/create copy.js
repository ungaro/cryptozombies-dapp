import {
  Form, Input, Select, InputNumber, Switch, Radio,Tooltip,
  Slider, Button, Upload, Icon, Rate,
  Row,Col

} from 'antd';
import { Component } from 'react'
import ZombieCreator from '../../components/zombiecreator'
import MetaMaskLogin from '../../components/MetaMaskLogin'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class ZombieForm extends Component {




  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 12 },
    };
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
          {getFieldDecorator('slider')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7' }}  min={1} max={7}/>
          )}
        </FormItem>

  <FormItem
          {...formItemLayout}
          label="Eye Gene"
        >
          {getFieldDecorator('slider')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7' }}  min={1} max={7}/>
          )}
        </FormItem>


  <FormItem
          {...formItemLayout}
          label="Shirt Gene"
        >
          {getFieldDecorator('slider')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7' }}  min={1} max={7}/>
          )}
        </FormItem>


          <FormItem
          {...formItemLayout}
          label="Skin Color Gene"
        >
          {getFieldDecorator('slider')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7' }}  min={1} max={7}/>
          )}
        </FormItem>


          <FormItem
          {...formItemLayout}
          label="Eye Color Gene"
        >
          {getFieldDecorator('slider')(
            <Slider marks={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7' }}  min={1} max={7}/>
          )}
        </FormItem>


          <FormItem
          {...formItemLayout}
          label="Clothes Color Gene"
        >
          {getFieldDecorator('slider')(
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



  constructor (props) {
    super(props)

    //this.store = initStore(props.isServer, props.shows)
  }


    getChallenge() {

  web3.eth.getAccounts(function(err, accounts){
    if (err != null) console.error("An error occurred: "+err);
    else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
    else console.log("User is logged in to MetaMask");


    console.log(web3.eth.accounts[0]);

});

  this._challenge.text='HAHAHAHAH';
    /*
    $('.challenge').empty();
    $.get('http://localhost:3020/auth/' + web3.eth.accounts[0], (res) => {
      challenge = res
      console.log(res)
      res.forEach(line => {
        $('.challenge').append(line.name);
        $('.challenge').append('<br>');
        $('.challenge').append(line.value);
        $('.challenge').append('<br>');
      })
      const from = web3.eth.accounts[0];
      const params = [challenge, from];
      const method = 'eth_signTypedData';
      web3.currentProvider.sendAsync({
        method,
        params,
        from
      }, async (err, result) => {
        signature = result.result;
        if (err) {
          return console.error(err);
        }
        if (result.error) {
          return console.error(result.error);
        }
        $('.signature').text(signature);
      });
    });

    */



     
    }

  render() {
    return (
    <div>

    <h1>Zombie List</h1>
    <hr/>

  <MetaMaskLogin />

   
   <hr/>
    <Row>

      <Col className="gutter-row" span={8}>
  <ZombieCreator/>
</Col>
      <Col className="gutter-row" span={16}>

  <WrappedDemo />
</Col>
    </Row>
    </div>

    )
  }
};




