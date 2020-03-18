import React, { Component } from 'react';
import { Tab, Button, Balloon } from '@alifd/next';
import styles from './index.module.scss';

export default class School extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
      editorVisible: false,
    }
  }

  componentDidMount = () => {
  }
 
  mockCentent = () => {
    return Array.from({ length: 2 + Math.round(Math.random() * 5) }).map(() => {
      return {
        title: '长文章',
        cover:
          'https://img.alicdn.com/tfs/TB1sbkkXmBYBeNjy0FeXXbnmFXa-280-498.png',
        url: '#',
        detail: [
          {
            label: '模板描述',
            desc: '创作自由度高。'.repeat(2 + Math.round(Math.random() * 5)),
          },
          {
            label: '创作指导',
            desc: '<a href="#">好的长文章应该怎么写？</a>',
          },
        ],
      };
    });
  }

  editArticle = () => {
    this.setState({editorVisible: true});
  }

  render() {
    const tabs = [
      {
        tab: '经典文章',
        icon: require('./images/post.png'),
        key: 'home',
        content: this.mockCentent(),
      },
      {
        tab: '视频教程',
        icon: require('./images/video.png'),
        key: 'doc',
        content: this.mockCentent(),
      },
      {
        tab: '问答',
        icon: require('./images/ask.png'),
        key: 'ask',
        content: this.mockCentent(),
      },
    ];

    
    const editorBtnTrigger = <Button type='primary' onClick={this.editArticle.bind(this)}> 发布新作品 </Button>;

    return (
      <div>
        <div className={styles.titleWrapper}>

          <a href='#braftEditor' target="_blank" rel="noopener noreferrer">
              <Balloon align='r' trigger={editorBtnTrigger} closable={false}>
                作品信息将发布到链上，文章内容存于IPFS网络
              </Balloon>              
            </a>

        </div>
        <Tab
          navStyle={{ backgroundColor: '#fff' }}
          contentStyle={{ backgroundColor: '#fff', marginTop: 20 }}
        >
          {tabs.map((item) => {
            return (
              <Tab.Item
                tabStyle={{ height: 60, padding: '0 15px' }}
                key={item.key}
                title={
                  <div className={styles.navItemWraper}>
                    <img
                      alt={item.tab}
                      src={item.icon}
                      className={styles.imgas}
                    />
                    {item.tab}
                  </div>
                }
              >
                <div className={styles.postCategoryList}>
                  {item.content.map((item, index) => {
                    return (
                      <div key={index} className={styles.postCategoryItem}>
                        <div className={styles.coverWrapper}>
                          <img
                            alt={item.title}
                            className={styles.imgbs}
                            src={item.cover}
                          />
                        </div>
                        <div className={styles.blockDetail}>
                          <h3 className={styles.blockTitle}>{item.title}</h3>

                          {item.detail.map((desc, detailIndex) => {
                            return (
                              <div key={detailIndex} className={styles.blockItem}>
                                <label className={styles.blockLable}>
                                  {desc.label}
                                </label>
                                <div
                                  className={styles.blockDesc}
                                  dangerouslySetInnerHTML={{
                                    __html: desc.desc,
                                  }}
                                />
                              </div>
                            );
                          })}
                          <Button
                            className={styles.blockBtn}
                            type="primary"
                            component="a"
                            href={item.url}
                          >
                            立即创作
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Tab.Item>
            );
          })}
        </Tab>
      </div>
    );
  }
}