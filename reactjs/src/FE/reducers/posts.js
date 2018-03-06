import { FETCH_POSTS, ADD_POSTS } from '../constants';

const initialState = {
  posts: []
};

const posts = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_POSTS: return { ...state, posts: action.posts };
  case ADD_POSTS: return {...state, posts: [...posts, action.posts] };
  default: return state;
  }
};

export default posts;