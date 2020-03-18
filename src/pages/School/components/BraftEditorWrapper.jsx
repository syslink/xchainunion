import { Input, Button, Dialog, Form, Grid, Checkbox, Message  } from '@alifd/next';
import { Select } from '@icedesign/base';
import React from 'react';
import BraftEditor from 'braft-editor';
import { ContentUtils } from 'braft-utils';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';
import Markdown from 'braft-extensions/dist/markdown';
import CodeHighlighter from 'braft-extensions/dist/code-highlighter';
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-solidity';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-markdown';

// 引入表情包组件样式文件
import 'braft-extensions/dist/emoticon.css';
// 引入表情包组件和默认表情包列表
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon';

// 转换默认表情包列表，让webpack可以正确加载到默认表情包中的图片，请确保已对png格式的文件配置了loader
const emoticons = defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`))

BraftEditor.use(Emoticon({
  includeEditors: ['demo-editor-with-emoticon'],
  emoticons: emoticons
}));


const options = {
  syntaxs: [
    {
      name: 'JavaScript',
      syntax: 'javascript'
    }, {
      name: 'HTML',
      syntax: 'html'
    }, {
      name: 'CSS',
      syntax: 'css'
    }, {
      name: 'Java',
      syntax: 'java',
    }, {
      name: 'PHP',
      syntax: 'php'
    }, {
      name: 'Go',
      syntax: 'go',
    }, {
      name: 'Solidity',
      syntax: 'solidity'
    }, {
      name: 'Rust',
      syntax: 'rust'
    }, {
      name: 'Markdown',
      syntax: 'markdown'
    }
  ]
}
BraftEditor.use(Markdown(options));
BraftEditor.use(CodeHighlighter(options));

const ipfsClient = require('ipfs-http-client');
const FormItem = Form.Item;
const { Row, Col } = Grid;

export default class BraftEditorWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState(null),
      web3: null,
      currentAddress: '',
      launchArticleVisible: false,
      rightUrlVisible: false,
      gasPriceUnit: 'Gwei',
      storeOnChain: true,
      storeOnFT: false,
      chainList: [{label:'以太坊', value: 0}, {label:'FT主网', value: 2}, {label:'趣链测试网', value: 4}, {label:'夸克主网', value: 5}, {label:'中心化数据库', value: 6}],
      tooltip: '文章信息将根据您的选择保存于链上或中心化数据库',
      ipfs: null,
    }    
    this.state.ipfs = ipfsClient('http://ipfs.xchainunion.com');
  }

  componentDidMount = () => {
    this.setState({tooltip: '文章信息将根据您的选择保存于链上或中心化数据库'});
  }

  initMetamaskNetwork = async () => {
    if (!window.ethereum && !window.web3) { //用来判断你是否安装了metamask
          this.setDatabaseOnly();
    } else {
      let web3Provider = '';
      if (window.ethereum) {
        try {
          // 请求用户授权
          await window.ethereum.enable();
        } catch (error) {
          // 用户不授权时
          Message.error(T("授权失败，无法使用MetaMask服务"));
          this.setDatabaseOnly();
          return;
        }        
        web3Provider = window.ethereum;
      } else if (window.web3) {
        web3Provider = window.web3;
      }      
      if (web3Provider != '') {
        this.state.web3 = new Web3(web3Provider);      
        this.state.web3.eth.getAccounts((error, accounts) => {
          if (!error && accounts.length > 0) {
            this.setState({currentAddress: accounts[0], tooltip: '当前地址:' + accounts[0]});
          }
        });
      }
    }
  }

  setDatabaseOnly = () => {
    this.setState({chainList: [{label:'中心化数据库', value: 6}], storeOnChain: false, 
                   tooltip: '由于您未安装Metamask插件，文章信息只能存储在中心化数据库'});
  }

  clearContent = () => {
    this.setState({
      editorState: ContentUtils.clear(this.state.editorState)
    })
  }

  insertText = () => {
  	this.setState({
    	editorState: ContentUtils.insertText(this.state.editorState, '本文出自:')
    })
  }
  
  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  onTitleChange = (v) => {
    this.state.title = v;
  }

  onLaunchArticleOK = (articleInfo) => {
    const content = this.state.editorState.toHTML();
    this.state.ipfs.add({content}).then(result => {
      const articleHash = result[0].hash;
      console.log(articleHash);
    }).catch(error => {
      Message.error(error.message || error);
      console.log(error);
    });
  }

  onLaunchArticleClose = () => {
    this.setState({launchArticleVisible: false});
  }

  selectChainType = (v) => {
    this.state.chainType = v;
    switch(v) {
      case 0:
      case 1:
      case 4:
      case 5:
        this.state.gasPriceUnit = 'Gwei';
        this.state.storeOnChain = true;
        this.state.storeOnFT = false;
        this.initMetamaskNetwork();
        break;
      case 2:
      case 3:
        this.state.gasPriceUnit = 'Gaft';
        this.state.storeOnChain = true;
        this.state.storeOnFT = true;
        this.initMetamaskNetwork();
        break;
      case 6:
        this.state.storeOnChain = false;
        this.state.storeOnFT = false;
        this.state.tooltip = '文章信息将保存于中心化数据库中';

    }
    this.setState({gasPriceUnit: this.state.gasPriceUnit, storeOnChain: this.state.storeOnChain});
  }

  checkRight = (v) => {
    this.state.right = v;
    this.setState({rightUrlVisible: true});
  }

  preview = () => {

    if (window.previewWindow) {
      window.previewWindow.close()
    }

    window.previewWindow = window.open()
    window.previewWindow.document.write(this.buildPreviewHtml())
    window.previewWindow.document.close()

  }

  buildPreviewHtml () {
    return `
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${this.state.editorState.toHTML()}</div>
        </body>
      </html>
    `
  }

  render () {
    const extendControls = [
      {
        key: 'clear-editor',
        type: 'button',
        text: '清空编辑器',
        onClick: this.clearContent
      }, {
      	key: 'insert-text',
        type: 'button',
        text: '插入文章来源',
        onClick: this.insertText
      }, {
      	key: 'preview',
        type: 'button',
        text: '预览',
        onClick: this.preview
      }
    ]

    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: '<p></p>',
      onChange: this.handleChange,
    };

    const formItemLayout = {
      labelCol: {
          fixedSpan: 6
      },
      wrapperCol: {
          span: 20
      }
    }; 

    return (
      <div>
        <Input style={{width: '50%'}} size="large" addonTextBefore="文章标题" onChange={this.onTitleChange} aria-label="Large" />
        <Button type='primary' style={{marginLeft: '10px'}} onClick={() => {this.setState({launchArticleVisible: true});}}>发表</Button>
        <br />
        <BraftEditor id='editor' {...editorProps}
          value={this.state.editorState}
          extendControls={extendControls}
        />
        <Dialog style={{ width: "30%" }}
          visible={this.state.launchArticleVisible}
          title="发表文章"
          closeable="close,esc,mask"
          footer={false}
          onOk={this.onLaunchArticleOK.bind(this)}
          onCancel={this.onLaunchArticleClose.bind(this)}
          onClose={this.onLaunchArticleClose.bind(this)}
        >
          <Form style={{width: '100%'}} {...formItemLayout} >
            <FormItem label="链/数据库" required asterisk>
                <Select name='dataStore' style={{width: '30%'}} dataSource={this.state.chainList} onChange={this.selectChainType.bind(this)}/>
                <p>{this.state.tooltip}</p>
            </FormItem>
            <FormItem label="是否原创" required asterisk>
                <Checkbox onChange={this.checkRight} defaultValue={true}/>
            </FormItem>
            <FormItem label="原创链接" format='url'>
                <Input name="originUrl" hasClear hasLimitHint />
            </FormItem>
            <FormItem label="作者">
                <Input name="author" hasClear hasLimitHint />
            </FormItem>
            <FormItem label="FT账号" required={this.state.storeOnFT} asterisk={this.state.storeOnFT}>
                <Input name="ftAccount" disabled={!this.state.storeOnFT} hasClear hasLimitHint/>
                <p>此账号所绑定的公钥必须同当前地址相对应</p>
            </FormItem>
            <FormItem label="GAS单价" required={this.state.storeOnChain} asterisk={this.state.storeOnChain} autoValidate format='number'>
                <Input name="gasPrice" disabled={!this.state.storeOnChain} hasClear hasLimitHint addonAfter={this.state.gasPriceUnit} defaultValue='10'/>
            </FormItem>
            <FormItem label="GAS上限" required={this.state.storeOnChain} asterisk={this.state.storeOnChain} autoValidate format='number'>
                <Input name="gas" disabled={!this.state.storeOnChain} hasClear hasLimitHint defaultValue='30000'/>
            </FormItem>
            
            <Row>
                <Col style={{ textAlign: 'right' }}>
                  <Form.Submit type="primary" onClick={this.onLaunchArticleOK}>确认</Form.Submit>
                  &nbsp;&nbsp;
                  <Form.Submit onClick={this.onLaunchArticleClose}>取消</Form.Submit>
                </Col>
            </Row>
          </Form>
        </Dialog>
      </div>
    )

  }

}