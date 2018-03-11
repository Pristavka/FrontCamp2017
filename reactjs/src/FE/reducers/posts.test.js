import posts from './posts';
import { FETCH_POSTS, ADD_POSTS } from '../constants';

describe('Posts reducer', () => {
  const postsSpy = [{
    'author': 'Siarhei',
    'text': 'Hello World!'
  }];

  const singlePost = {
    'author': 'Valera',
    'text': 'Hello Siarhei!'
  };

  it('Should handle initial state', () => {
    expect(posts(undefined, {})).toEqual({ posts: [] });
  });

  it('Should handle FETCH_POSTS', () => {
    expect(posts({ posts: [] }, {
      type: 'FETCH_POSTS',
      posts: postsSpy
    })).toEqual({ posts: [
      {
        'author': 'Siarhei',
        'text': 'Hello World!'
      }
    ] });
  });

  it('Should handle ADD_POSTS', () => {
    expect(posts({ posts: [
      {
        'author': 'Siarhei',
        'text': 'Hello World!'
      }
    ] }, {
      type: 'ADD_POSTS',
      posts: singlePost
    })).toEqual({ posts: [
      {
        'author': 'Siarhei',
        'text': 'Hello World!'
      },
      {
        'author': 'Valera',
        'text': 'Hello Siarhei!'
      }
    ] });
  });
});
