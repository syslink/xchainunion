import React from 'react';
import { Button } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function IntroWithBackground() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inntroContent}>
        <h3 className={styles.title}>高质量学习资料</h3>
        <div className={styles.titleLine}>
          <div className={styles.titleHighlightLine} />
        </div>
        <p className={styles.desc}>
          通过我们的专业水平，帮你从海量学习资料中挑选最有质量的部分供您学习，快速成为区块链行业的专家
        </p>
        <Link to="">
          <Button className={styles.extraButton}>了解更多 &gt;</Button>
        </Link>
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
