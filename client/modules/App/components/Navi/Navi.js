import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './navi.css';

export function Navi(props, context) {
  return (
    <span>
        <li><Link to={'/home'} activeClassName={styles['active']}>Home</Link></li>
        <li><Link to={'/about'} activeClassName={styles['active']}>About</Link></li>
        <li><Link to={'/'} activeClassName={styles['active']} onlyActiveOnIndex>Posts</Link></li>
    </span>
  );
}

Navi.propTypes = {};

export default Navi;
