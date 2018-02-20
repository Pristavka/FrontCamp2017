import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../assets/postsList.scss';
import Post from '../post/post';
import Filter from '../filter/filter';

export default class PostsList extends React.Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape())
  };

  renderPosts = (posts) => (
    <React.Fragment>
      {posts.map(post => (<Post post={post} key={post.id}/>))}
  </React.Fragment>
  )

  render() {
    const posts = this.renderPosts(this.props.posts);
    return (
      <React.Fragment>
        <Filter {...this.props}/>
        <h1 className={styles.title}>This is the List fo all Blogs</h1>
        {posts}
      </React.Fragment>
    )
  }
}
