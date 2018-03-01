import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../assets/post.scss';

export default class Post extends React.Component {
  renderPost = (props) => (
    <div className={styles.post}>
      <h2 className={styles.post__name}>{props.post.author}</h2>
      <div className={styles.post__description}>{props.post.text}</div>
    </div>
  )
  render() {
    const post = this.renderPost(this.props)
    return (
      <React.Fragment>
        {post}
        <hr/>
      </React.Fragment>
    )
  }
}
