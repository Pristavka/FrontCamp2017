import React from 'react';
import { connect } from 'react-redux';

import styles from '../../assets/main.scss';
import Header from '../header/header';
import AddPost from '../addPost/addPost';
import PostList from '../postsList/postsList';

class Main extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      posts: props.posts,
      postsafterSort: null,
    }
  };

  // componentDidMount() {
  //   if(!this.state.posts) Main.requestInitialData()
  //     .then(posts => {
  //       this.setState({ posts: posts.data })
  //     })
  // }

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

export default connect(
  state => ({ posts: state.posts }),
  //dispatch => ({ requestInitialData })
)(Main);
