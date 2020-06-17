import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';

const MENUS = [
  {
    name: '链学堂',
    path: '#chainSchool',
  },
  {
    name: '链服务',
    path: '#chainService',
  },
  {
    name: 'API服务',
    path: '#apiservice',
  },
  {
    name: 'DApp外包',
    path: '#dapp',
  },
  {
    name: '解决方案',
    path: '#solution',
  },
];

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.headerNavbar}>
          {
            MENUS.map((item, idx) => {
              return (
                <a key={idx} className={styles.headerMenuItem} href={item.path}>{item.name}</a>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
