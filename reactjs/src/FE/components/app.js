import React from 'react';
import { connect } from ''
import Main from './main/main';
import '../assets/global.scss';

import { fetchAllPosts } from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return <Main posts={props.posts}/>;
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
});

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
