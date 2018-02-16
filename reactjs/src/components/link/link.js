import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../assets/link.scss';

export default class Link extends React.Component {
  static propTypes = {
    showComponent: PropTypes.func
  }

  showPage = (e) => this.props.showComponent(e.target.innerText.toLowerCase());
  renderLink = (props) => (<div className={styles.link} onClick={this.showPage.bind(this)}>{props.label}</div>);

  render() {
    const link = this.renderLink(this.props);
    return link
  }
}
