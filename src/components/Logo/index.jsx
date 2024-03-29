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
        !isMobile ? <img src={logo} width="35%" height="35%" alt="logo" /> :
                    <img src={logo} width="25%" height="25%" alt="logo" />
      }
        
      </a>
    </div>
  );
}
