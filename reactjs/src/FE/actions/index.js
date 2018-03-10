import { FETCH_POSTS, ADD_POSTS } from '../constants';

const fetchPosts = posts => ({ type: FETCH_POSTS, posts });
const addPosts = () => ({ type: ADD_POSTS });

export const addNewPost = (url, body) => (dispatch, getState, api) => api.addPosts(url, body)
  .then(() => dispatch(addPosts()));

export const fetchAllPosts = url => (dispatch, getState, api) => api.fetchPosts(url)
  .then(posts => dispatch(fetchPosts(posts.data)));
