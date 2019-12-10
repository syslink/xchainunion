import React from 'react';

const LIGHT = require('./images/logo.png');
const DARK = require('./images/logo.png');

export default function Logo(props) {
  const { isDark } = props;
  const logo = isDark ? DARK : LIGHT;
  let u = navigator.userAgent;
  let isMobile = !!u.match(/AppleWebKit.*Mobile.*/);
  return (
    <div
      className="logo"
      style={{
        height: 112,
        color: '#f40',
        textAlign: 'left',
      }}
    >
      <a href="/" style={{ display: 'block', position: 'relative' }}>
      {
        !isMobile ? <img src={logo} width="271" height="112" alt="logo" /> :
                    <img src={logo} width="135" height="56" alt="logo" />
      }
        
      </a>
    </div>
  );
}
