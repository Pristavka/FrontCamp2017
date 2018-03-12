import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import Message from '../message/massage';
import styles from '../../assets/addPosts.scss';

import { addPosts } from '../../../api';
import config from '../../../configs/config';

export class AddPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      post: '',
      showSuccess: false,
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      'author': this.state.author,
      'text': this.state.post
    }
    this.props.addNewPost(config.addPostsURL, post);
    this.showMessage();
  };

  showMessage = () => {
    this.setState({ showSuccess: true});
    setTimeout(() => this.setState({ showSuccess: false }), 5000);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        {this.state.showSuccess ? <Message /> : null}
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
      </React.Fragment>
    )
  };
};

export default connect(
  null,
  dispatch => ({ addNewPost })
)(AddPost);
