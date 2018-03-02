import { FETCH_POSTS, ADD_POSTS, REMOVE_POSTS } from '../config/constants';

const todos = (state = [], action) => {
  switch (action.type) {
  case FETCH_POSTS: return [...state, action.posts];
  }
};