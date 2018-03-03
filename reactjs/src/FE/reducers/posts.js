import { FETCH_POSTS, ADD_POSTS, REMOVE_POSTS } from '../config/constants';

export const posts = (state = [], action) => {
  switch (action.type) {
  case FETCH_POSTS: return [...state, action.posts];
  default: return state;
  }
};