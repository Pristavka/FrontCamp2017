import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../assets/addPosts.scss';
import { config } from '../../config/config';

export default class AddPost extends React.Component {
  static propTypes = {
    addPosts: PropTypes.func,
    showComponent: PropTypes.func,
    showMessage: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      post: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = {
      'id': Date.now(),
      'author': this.state.author,
      'description': this.state.post
    }
    this.props.addPosts(post);
    this.props.showComponent(config.pages.postsList);
    this.props.showMessage();
  }

  render() {
    return (
      <div className={styles.formWrapper}>
        <h1>On this page you can add new post!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>Author's name:</h3>
              <input type="text" name="author" placeholder="Enter your name" onChange={this.handleChange} required/>
          </div>
          <div>
            <h3>Enter post:</h3>
              <textarea name="post" placeholder="Enter your post" onChange={this.handleChange} required></textarea>
          </div>
          <button type="submit">Save post</button>
        </form>
      </div>
    )
  }
}
