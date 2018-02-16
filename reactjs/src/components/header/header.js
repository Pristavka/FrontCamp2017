import React from 'react';

import styles from '../../assets/header.scss';
import Menu from '../menu/menu';

export default class Header extends React.Component {

  renderHeader = () => (
    <header className={styles.header}>
      <Menu {...this.props}/>
    </header>
  );

  render() {
    const header = this.renderHeader();
    return header
  };
}
