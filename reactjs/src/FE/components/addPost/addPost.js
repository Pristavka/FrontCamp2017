import React from 'react';

import Header from '../header/header';
import Message from '../message/massage';
import styles from '../../assets/addPosts.scss';

export default class AddPost extends React.Component {

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
      'id': Date.now(),
      'author': this.state.author,
      'description': this.state.post
    }
    this.addPosts(post);
    this.showMessage();
  };

  addPosts = post => {
    let posts = this.state.posts;
    posts.push(post);
    this.setState({ posts });
  }

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
