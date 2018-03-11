import React from 'react';
import { connect } from 'react-redux';
import styles from '../../assets/postsList.scss';
import Post from '../post/post';
import Sorting from '../sorting/sorting';
import config from '../../../configs/config';

const renderPosts = (posts) => (
  <React.Fragment>
    {posts.map(post => (<Post post={post} key={post._id} />))}
  </React.Fragment>
)

export class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: props.posts }
  }

  componentDidMount() {
    if(!this.state.posts) this.props.fetchAllPosts(config.getAllPostsURL)
  }

  sortPosts = sortedPosts => this.setState(sortedPosts => ({ posts: sortedPosts }))

  render() {
    const posts = renderPosts(this.state.posts);
    return (
      <React.Fragment>
        <Sorting
          posts={this.state.posts}
          sortPosts={this.sortPosts}
        />
        <h1 className={styles.title}>This is the List fo all Blogs</h1>
        {posts}
      </React.Fragment>
    )
  }
};

export default connect(
  state => ({ posts: state.posts }),
  dispatch => ({ fetchAllPosts })
)(PostsList);
