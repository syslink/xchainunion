import React from 'react';
import { Button } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function ProductIntro() {
  let u = navigator.userAgent;
  let isMobile = !!u.match(/AppleWebKit.*Mobile.*/);
  return (
    <div className={styles.wrapper}>
      <div className={styles.productContent}>
      {
        !isMobile ? <div className={styles.productInfo}>
                      <h3 className={styles.title}>IDEworks</h3>
                      <div className={styles.titleLine}>
                        <div className={styles.titleHighlightLine} />
                      </div>
                      <p className={styles.desc}>
                        1：零配置运行，开箱即用；<br/>
                        2：开发体验一致，链间切换无压力；<br/>
                        3：编码直播，让编程不再枯燥；<br/>
                        4：打赏优质开发者，激励其持续分享代码；
                      </p>
                    </div> :
                    <div className={styles.mProductInfo}>
                    <h3 className={styles.title}>IDEworks</h3>
                    <div className={styles.titleLine}>
                      <div className={styles.titleHighlightLine} />
                    </div>
                    <p className={styles.mDesc}>
                      1：零配置运行，开箱即用；<br/>
                      2：开发体验一致，链间切换无压力；<br/>
                      3：编码直播，让编程不再枯燥；<br/>
                      4：打赏优质开发者；
                    </p>
                  </div>
      }
        
        <div className={styles.productSnapshot}>
        {
          !isMobile ? <img
                        width={590}
                        height={337}
                        src={require('./images/idetest.png')}
                        alt=""
                      /> : 
                      <img
                        width={245}
                        height={168}
                        src={require('./images/idetest.png')}
                        alt=""
                      />
        }
        </div>
      </div>
      <div className={styles.clipBackground} />
    </div>
  );
}
