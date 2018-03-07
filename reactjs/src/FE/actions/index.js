import { FETCH_POSTS, ADD_POSTS } from '../constants';

const fetchPosts = (posts) => ({ type: FETCH_POSTS, posts });
const addPosts = () => ({ type: ADD_POSTS });

const addNewPost = (url, body) => (dispatch, getState, api) => api.addPosts(url, body)
  .then(() => dispatch(addPosts()));

const fetchAllPosts = () => (dispatch, getState, api) => api.fetchPosts()
  .then(posts => dispatch(fetchPosts(posts)));

const fetchInitialData = url => (dispatch, getState, api) => api.fetchPosts(url)
  .then(posts => {
    dispatch(fetchPosts(posts.data));
  });

export default {
  fetchAllPosts,
  addNewPost,
  fetchInitialData
};
