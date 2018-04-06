import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export function Navi(props, context) {
  return (
    <span>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/'}>Posts</Link></li>
    </span>
  );
}

Navi.propTypes = {};

export default Navi;
