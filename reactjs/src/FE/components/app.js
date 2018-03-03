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

  // componentDidMount() {
  //   this.props.fetchAllPosts();
  // }

  render() {
    return <Main posts={this.props.posts}/>;
  }
};
