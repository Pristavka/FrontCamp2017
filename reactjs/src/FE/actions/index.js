import { FETCH_POSTS, ADD_POSTS } from '../constants';

export const fetchPosts = posts => ({ type: FETCH_POSTS, posts });
export const addPosts = posts => ({ type: ADD_POSTS, posts });

export const addNewPost = (url, body) => (dispatch, getState, api) => api.addPosts(url, body)
  .then(() => dispatch(addPosts(body)));

export const fetchAllPosts = url => (dispatch, getState, api) => api.fetchPosts(url)
  .then(posts => dispatch(fetchPosts(posts.data)));
