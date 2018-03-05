import { FETCH_POSTS, ADD_POSTS, REMOVE_POSTS } from '../constants';

const fetchPosts = (posts) => ({
  type: FETCH_POSTS,
  posts
});

const addPosts = () => ({
  type: ADD_POSTS
});

const removePosts = () => ({
  type: REMOVE_POSTS,
  shouldConfirm: true
});

const fetchAllPosts = () => (dispatch, getState, api) => api.fetchPosts()
  .then(posts => dispatch(fetchPosts(posts)));

export default {
  fetchAllPosts,
  addPosts,
  removePosts,
};
