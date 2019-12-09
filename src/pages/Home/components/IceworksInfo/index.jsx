import React from 'react';
import { Button } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function ProductIntro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productContent}>
        <div className={styles.productInfo}>
          <h3 className={styles.title}>IDEworks</h3>
          <div className={styles.titleLine}>
            <div className={styles.titleHighlightLine} />
          </div>
          <p className={styles.desc}>
          1：开发调试一体化，集成运行环境零配置运行，开箱即用；<br/>
          2：提供丰富的学习资料，减轻开发者的入门压力；<br/>
          3：可让开发者进行编码直播，让编程不再枯燥；<br/>
          4：可打赏开发者，激励其持续分享代码；
          </p>
        </div>
        <div className={styles.productSnapshot}>
          <img
            width={696}
            height={540}
            src={require('./images/ide.png')}
            alt=""
          />
        </div>
      </div>
      <div className={styles.clipBackground} />
    </div>
  );
}
