import React from 'react';
// import { connect } from 'react-redux';
import Main from './main/main';
import '../assets/global.scss';

// import { fetchAllPosts } from '../actions';

// @connect(
//   store => ({ posts: store.posts }),
//   { fetchAllPosts }
// )
export default class App extends React.Component {
  constructor(props) {
    super(props);
    let initialPosts;

    if(props.posts) {
      initialPosts = props.posts;
    } else {
      initialPosts = window.__initialPosts__;
      delete window.__initialPosts__;
    }

    this.state = { posts: initialPosts }
  }
  // componentDidMount() {
  //   this.props.fetchAllPosts();
  // }

  render() {
    return <Main posts={this.state.posts}/>;
  }
};
