import React from 'react';

import styles from '../../assets/header.scss';
import Menu from '../menu/menu';

const renderHeader = (props) => (
  <header className={styles.header}>
    <Menu {...props}/>
  </header>
);

const Header = (props) => renderHeader(props);

export default Header;
