import React from 'react';

import styles from '../../assets/postsList.scss';
import Post from '../post/post';
import Sorting from '../sorting/sorting';

const renderPosts = (posts) => (
  <React.Fragment>
    {posts.map(post => (<Post post={post} key={post.id}/>))}
  </React.Fragment>
)

const PostsList = (props) => {
  const posts = renderPosts(props.posts);

  return (
    <React.Fragment>
      <Sorting {...props}/>
      <h1 className={styles.title}>This is the List fo all Blogs</h1>
      {posts}
    </React.Fragment>
  )
};

export default PostsList;
