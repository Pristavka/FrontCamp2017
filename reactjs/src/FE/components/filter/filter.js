import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../assets/filter.scss';

export default class Filter extends React.Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape()),
    filterPosts: PropTypes.func
  };

  filterPosts = () => {
    let sortpost = this.props.posts;

    sortpost.sort((a,b) => {
      if (a.author > b.author) return 1;
      if (a.author < b.author) return -1;
      return 0;
    })
    this.props.filterPosts(sortpost);
  }

  render() {
    return (
      <button onClick={this.filterPosts} className={styles.button}>Filter by author</button>
    )
  }
}