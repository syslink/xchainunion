import React from 'react';
import { Button, Message } from '@alifd/next';
import styles from './index.module.scss';

export default function LandingIntroBanner() {
  let u = navigator.userAgent;
  let isMobile = !!u.match(/AppleWebKit.*Mobile.*/);
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
            <a href={!isMobile ? "http://eth.xchainunion.com:8090" : ''} target="_blank" rel="noopener noreferrer">
              <Button
                style={!isMobile ?  {
                                      height: 50,
                                      padding: '0 58px',
                                      fontSize: 16,
                                      marginBottom: '20px',
                                    } : {}}
                size="large"
                type="primary"
              >
                以太坊
              </Button>
            </a>
            <a href={!isMobile ? "http://hyperchain.xchainunion.com:8090" : ''} target="_blank" rel="noopener noreferrer">
              <Button
                style={!isMobile ?  {
                                      height: 50,
                                      padding: '0 58px',
                                      fontSize: 16,
                                      marginBottom: '20px',
                                      marginLeft: '20px',
                                    } : {marginLeft: '20px'}}
                type="primary"
                size="large"
              >
                趣链
              </Button>
            </a>
            <a href={!isMobile ? "http://ftchain.xchainunion.com:8090" : ''} target="_blank" rel="noopener noreferrer">
              <Button
                style={!isMobile ?  {
                                      height: 50,
                                      padding: '0 58px',
                                      fontSize: 16,
                                      marginBottom: '20px',
                                      marginLeft: '20px',
                                    } : {marginLeft: '20px'}}
                type="primary"
                size="large"
              >
                FT公链
              </Button>
            </a>
            <a href={!isMobile ? "http://polkadot.xchainunion.com:8090" : ''} target="_blank" rel="noopener noreferrer">
              <Button
                style={!isMobile ?  {
                                      height: 50,
                                      padding: '0 58px',
                                      fontSize: 16,
                                      marginBottom: '20px',
                                      marginLeft: '20px',
                                    } : {marginLeft: '20px'}}
                type="primary"
                size="large"
              >
                波卡
              </Button>
            </a>
          </div>
          {
          !isMobile ? '' : <h2 className={styles.tooltip}>以上各链的IDE需在PC上体验<br/>（地址:http://xchainunion.com:8090）</h2>
          }
        </div>
      </div>
    </div>
  );
}
