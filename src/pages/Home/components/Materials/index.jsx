import React from 'react';
import { Button } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function IntroWithBackground() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inntroContent}>
        <h3 className={styles.title}>降低学习成本</h3>
        <div className={styles.titleLine}>
          <div className={styles.titleHighlightLine} />
        </div>
        <p className={styles.desc}>
          我们可以为您挑选高质量的区块链学习资料，助您快速成为区块链行业专家
        </p>
      </div>
      <div className={styles.background}>
        <div className={styles.grayOverlay} />
        <div className={styles.backgroundImage} />
      </div>
      <div className={styles.topClipTriange} />
      <div className={styles.bottomClipTriange} />
    </div>
  );
}
