import React from 'react';
import Logo from '../Logo';

const wxq = require('./images/wxq.jpg');
export default () => {
  let u = navigator.userAgent;
  let isMobile = !!u.match(/AppleWebKit.*Mobile.*/);
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        lineHeight: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ filter: 'grayscale(100%)', opacity: 0.7 }}>
        {
          !isMobile ? <img src={wxq} width="15%" height="15%" alt="微信群" /> :
                      <img src={wxq} width="10%" height="10%" alt="微信群" />
        }
      </div>
      <div
        style={{
          color: '#999',
          lineHeight: 1.5,
          fontSize: 12,
          textAlign: 'right',
        }}
      >
        思凌科技（沪ICP备19046181号-1）
        <br />
        © 2019 版权所有
      </div>
    </div>
  );
};
