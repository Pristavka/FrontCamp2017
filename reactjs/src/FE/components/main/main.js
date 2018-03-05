import React from 'react';

import styles from '../../assets/main.scss';
import Header from '../header/header';
import AddPost from '../addPost/addPost';
import PostList from '../postsList/postsList';

import { fetchAllPosts } from '../../../api';
import config from '../../../configs/config';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    let initialData;

    if(props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__initialData__;
      delete window.__initialData__;
    }

    this.state = {
      posts: initialData,
      postsafterSort: null,
    }
  };

  componentDidMount() {
    if(!this.state.posts) Main.requestInitialData()
      .then(posts => this.setState({ posts: posts.data }))
  }

  static requestInitialData() {
    return fetchAllPosts(config.getAllPostsURL);
  };

  sortPosts = postsafterSort => this.setState({ postsafterSort });

  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <PostList
                posts={
                  this.state.postsafterSort ?
                  this.state.postsafterSort :
                  this.state.posts
                }
                sortPosts={this.sortPosts}
              />
          </div>
        </div>
      </React.Fragment>
    )
  }
};
