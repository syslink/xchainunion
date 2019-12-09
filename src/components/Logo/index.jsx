import React from 'react';

const LIGHT = require('./images/logo4.png');
const DARK = require('./images/logo4.png');

export default function Logo(props) {
  const { isDark } = props;
  const logo = isDark ? DARK : LIGHT;
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
        <img src={logo} width="271" height="112" alt="logo" />
      </a>
    </div>
  );
}
