import React from 'react';
import { Button } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function FeatureList() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>经典DAPP</h3>
          <div className={styles.titleLine}>
            <div className={styles.titleHighlightLine} />
          </div>
        </div>
        <p className={styles.desc}>
          汇聚当前最优秀的DAPP，为开发者开发应用创造灵感
        </p>
        <div className={styles.featureListWrapper}>
          <div className={styles.featureItem}>
            <img
              src={require('./images/AISoccerManager.jpg')}
              alt=""
              style={{ width: 86, height: 85 }}
            />
            <h4 className={styles.featureTitle}>AI足球大师</h4>
            <p className={styles.featureDesc}>AI与区块链融合的经典案例</p>
          </div>
          <div className={styles.featureItem}>
            <img
              src={require('./images/aragonLogo.jpg')}
              alt=""
              style={{ width: 90, height: 73 }}
            />
            <h4 className={styles.featureTitle}>Aragon</h4>
            <p className={styles.featureDesc}>DAO定制平台 降低运营成本</p>
          </div>
          <div className={styles.featureItem}>
            <img
              src={require('./images/fundLogo.jpg')}
              alt=""
              style={{ width: 100, height: 68 }}
            />
            <h4 className={styles.featureTitle}>FutureFund</h4>
            <p className={styles.featureDesc}>去中心化 可信任</p>
          </div>
        </div>
        <div className={styles.extraInfo}>
          <Link to="">
            <Button type="secondary" className={styles.extraButton}>了解更多 &gt;</Button>
          </Link>
        </div>
      </div>
      <div className={styles.clipBackground} />
    </div>
  );
}
