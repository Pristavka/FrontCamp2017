import React from 'react';

import styles from '../../assets/filter.scss';

const filterPosts = (props) => {
  let sortpost = props.posts;

  sortpost.sort((a,b) => {
    if (a.author > b.author) return 1;
    if (a.author < b.author) return -1;
    return 0;
  })
  props.filterPosts(sortpost);
};

const Filter = (props) => <button onClick={() => filterPosts(props)} className={styles.button}>Filter by author</button>;

export default Filter;
