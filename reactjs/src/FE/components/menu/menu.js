import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../assets/menu.scss';
import Link from '../link/link';

const links = ['Show all posts', 'Add post']

export default class Menu extends React.Component {
  static propTypes = {
    showComponent: PropTypes.func
  }

  renderSlogan = () => (
    <div className={styles.slogan}>Blogs Portal</div>
  );

  renderLinks = () => (
  <React.Fragment>
    {links.map(txt => (<Link label={txt} key={txt} showComponent={this.props.showComponent}/>))}
  </React.Fragment>
  );



  render() {
    const slogan = this.renderSlogan();
    const navigation = this.renderLinks();
    return (
      <React.Fragment>
        {slogan}
        {navigation}
      </React.Fragment>
    )
  }
}