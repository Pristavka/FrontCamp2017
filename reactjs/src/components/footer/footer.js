import React from 'react';

import styles from '../../assets/footer.scss';
import Menu from '../menu/menu';

export default class Footer extends React.Component {
  renderFooter = () => (
    <footer className={styles.footer}>
      <Menu {...this.props}/>
    </footer>
  );

  render() {
    const footer = this.renderFooter();
    return footer
  };
}
