import React from 'react';

import styles from '../../assets/main.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import AddPost from '../addPost/addPost';
import PostList from '../postsList/postsList';

import { mockPosts } from '../../mockdata/mockPosts';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: 'show all posts',
      posts: mockPosts
    };
    this.showComponent = this.showComponent.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
  }

  showComponent(component) {
    this.setState({ showComponent: component });
  };

  filterPosts(posts) {
    this.setState({ posts });
  }

  render() {
    return (
      <React.Fragment>
        <Header showComponent={this.showComponent}/>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {(() => {
              switch (this.state.showComponent) {
              case 'show all posts': return <PostList posts={this.state.posts} filterPosts={this.filterPosts}/>;
              case 'add post': return <AddPost />;
            }})()}
          </div>
        </div>
        <Footer showComponent={this.showComponent}/>
      </React.Fragment>
    )
  }
}