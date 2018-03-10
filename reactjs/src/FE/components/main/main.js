import React from 'react';

import styles from '../../assets/main.scss';
import Header from '../header/header';
import AddPost from '../addPost/addPost';
import PostList from '../postsList/postsList';

const Main = () => (
  <React.Fragment>
    <Header/>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PostList />
      </div>
    </div>
  </React.Fragment>
)

export default Main;
