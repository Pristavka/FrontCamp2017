import * as actions from './index';
import { FETCH_POSTS, ADD_POSTS } from '../constants';

describe('Posts actions', () => {
  it('FetchPosts action should add All Posts', () => {
    const posts = {
      'author': 'Siarhei',
      'text': 'Hello World!'
    };

    expect(actions.fetchPosts(posts)).toEqual({
      type: FETCH_POSTS,
      posts
    });
  });

  it('AddPosts action should add Post', () => {
    expect(actions.addPosts()).toEqual({
      type: ADD_POSTS
    });
  });
});