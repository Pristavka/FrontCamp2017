import React from 'react';

import styles from '../../assets/sorting.scss';

const sortPosts = (props) => {
  let sortpost = [...props.posts];

  sortpost.sort((a,b) => {
    if (a.author > b.author) return 1;
    if (a.author < b.author) return -1;
    return 0;
  })
  props.sortPosts(sortpost);
};

const Sorting = (props) => <button onClick={() => sortPosts(props)} className={styles.button}>Sort by author</button>;

export default Sorting;
