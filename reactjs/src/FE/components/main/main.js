import React from 'react';

import styles from '../../assets/main.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import AddPost from '../addPost/addPost';
import PostList from '../postsList/postsList';
import Message from '../message/massage';

import { config } from '../../config/config';
import { mockPosts } from '../../mockdata/mockPosts';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: config.pages.postsList,
      posts: mockPosts,
      showSuccess: false
    };
  }

  showComponent = (component) => this.setState({ showComponent: component });
  filterPosts = (posts) => this.setState({ posts });

  addPosts = (post) => {
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
        <Header showComponent={this.showComponent}/>
        {this.state.showSuccess ? <Message /> : null}
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {(() => {
              switch (this.state.showComponent) {
              case config.pages.postsList: return <PostList
                posts={this.state.posts}
                filterPosts={this.filterPosts}
              />;
              case config.pages.addPost: return <AddPost
                addPosts={this.addPosts}
                showComponent={this.showComponent}
                showMessage={this.showMessage}
              />;
            }})()}
          </div>
        </div>
        <Footer showComponent={this.showComponent}/>
      </React.Fragment>
    )
  }
};
