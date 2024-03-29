import React from 'react';
import { Button, Balloon, Message } from '@alifd/next';
import styles from './index.module.scss';

export default function LandingIntroBanner() {
  let u = navigator.userAgent;
  let isMobile = !!u.match(/AppleWebKit.*Mobile.*/);
  const ethBtnTrigger = <Button
                          style={!isMobile ?  {
                                                height: 50,
                                                padding: '0 58px',
                                                fontSize: 16,
                                                marginBottom: '20px',
                                              } : {marginTop: '10px', width: 80}}
                          size="large"
                          type="primary"
                        >
                          以太坊
                        </Button>;
  const hyperBtnTrigger = <Button
                            style={!isMobile ?  {
                              height: 50,
                              padding: '0 58px',
                              fontSize: 16,
                              marginBottom: '20px',
                              marginLeft: '20px',
                            } : {marginTop: '10px', width: 80}}
                            size="large"
                            type="primary"
                          >
                            趣链
                          </Button>;
  const oexBtnTrigger = <Button
                          style={!isMobile ?  {
                                                height: 50,
                                                padding: '0 58px',
                                                fontSize: 16,
                                                marginBottom: '20px',
                                                marginLeft: '20px',
                                              } : {marginTop: '10px', width: 80}}
                          type="primary"
                          size="large"
                        >
                          OEX公链
                        </Button>;  
  const polkadotBtnTrigger = <Button
                                style={!isMobile ?  {
                                                      height: 50,
                                                      padding: '0 58px',
                                                      fontSize: 16,
                                                      marginBottom: '20px',
                                                      marginLeft: '20px',
                                                    } : {marginTop: '10px', width: 80}}
                                type="primary"
                                size="large"
                              >
                                波卡
                              </Button>;
  const quarkBtnTrigger = <Button
                                style={!isMobile ?  {
                                                      height: 50,
                                                      padding: '0 58px',
                                                      fontSize: 16,
                                                      marginBottom: '20px',
                                                      marginLeft: '20px',
                                                    } : {marginTop: '10px', width: 80}}
                                type="primary"
                                size="large"
                              >
                                夸克
                              </Button>;
  const confluxBtnTrigger = <Button
                                style={!isMobile ?  {
                                                      height: 50,
                                                      padding: '0 58px',
                                                      fontSize: 16,
                                                      marginBottom: '20px',
                                                      marginLeft: '20px',
                                                    } : {marginTop: '10px', width: 80}}
                                type="primary"
                                size="large"
                              >
                                Conflux
                              </Button>;
  return (
    <div className={styles.landingIntroBanner} style={{ height: '100vh' }}>
      <div
        className={styles.landingIntroBannerBackground}
        style={{
          backgroundImage:
            `url(${require('./images/firstPage3.jpg')})`,
          backgroundPosition: 'center',
        }}
      />
      <div className={styles.landingIntroBannerContentWrapper}>
        <div className={styles.landingIntroBannerContent}>
        {
          !isMobile ? <h2 className={styles.title}>区块链一站式开发、学习和分享平台</h2> :
                      <h2 className={styles.subTitle}>区块链一站式开发、学习和分享平台</h2>
        }
          {/* <p className={styles.subTitle}>
            通过将各大主流公链/联盟链的开发环境、学习资料、应用分享集成在一起，
            最大限度的节约开发者进入区块链行业的成本。
          </p> */}
          <div
            className={styles.landingIntroBannerButtons}
            style={{ textAlign: 'center', marginTop: 70 }}
          >
            <a href={!isMobile ? "https://eth.xchainunion.com" : 'https://ethereum.org/'} target="_blank" rel="noopener noreferrer">
              <Balloon trigger={ethBtnTrigger} closable={false}>
                江湖地位仅次于比特币
              </Balloon>              
            </a>
            {
              !isMobile ? '' : <br/>
            }
            <a href={!isMobile ? "https://hyperchain.xchainunion.com" : 'https://www.hyperchain.cn/'} target="_blank" rel="noopener noreferrer">
              <Balloon trigger={hyperBtnTrigger} closable={false}>
                国内领先的联盟链
              </Balloon>
            </a>
            {
              !isMobile ? '' : <br/>
            }
            <a href={!isMobile ? "https://oex.xchainunion.com/" : 'https://oexchain.com'} target="_blank" rel="noopener noreferrer">
              <Balloon trigger={oexBtnTrigger} closable={false}>
              以通证经济为核心的未来金融体系基础设施，专为DeFi而生
              </Balloon>
            </a>
            {
              !isMobile ? '' : <br/>
            }
            <a href={!isMobile ? "https://quark.xchainunion.com/" : 'http://quarkchain.io'} target="_blank" rel="noopener noreferrer">
              <Balloon trigger={quarkBtnTrigger} closable={false}>
              支持分片技术，TPS最高可达30万+
              </Balloon>
            </a>
            {
              !isMobile ? '' : <br/>
            }
            <a href={!isMobile ? "https://conflux.xchainunion.com/" : 'http://confluxnetwork.org/'} target="_blank" rel="noopener noreferrer">
              <Balloon trigger={confluxBtnTrigger} closable={false}>
              清华“姚班”出品，在保持足够去中心化的前提下，TPS达到了3000+
              </Balloon>
            </a>
            {
              !isMobile ? '' : <br/>
            }
            <a href={!isMobile ? "https://polkadot.xchainunion.com/" : 'https://polkadot.network/'} target="_blank" rel="noopener noreferrer">
              <Balloon trigger={polkadotBtnTrigger} closable={false}>
                Gavin Wood领携，专为跨链而生
              </Balloon>
            </a>
          </div>
          {
          !isMobile ? '' : <h2 className={styles.tooltip}>以上各链的IDE需在PC上体验<br/>（地址:https://xChainUnion.com）</h2>
          }
        </div>
      </div>
    </div>
  );
}
