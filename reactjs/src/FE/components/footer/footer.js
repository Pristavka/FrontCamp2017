import React from 'react';

import styles from '../../assets/footer.scss';
import Menu from '../menu/menu';

const renderFooter = (props) => (
  <footer className={styles.footer}>
    <Menu {...props}/>
  </footer>
);

const Footer = (props) => renderFooter(props);

export default Footer;
