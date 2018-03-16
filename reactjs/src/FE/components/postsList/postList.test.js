import React from 'react';
import { PostsList } from './postsList';

it('Should render a PostsList', () => {

  const props = {
    fetchAllPosts: jest.fn(),
    posts: [{
      '_id': 12354347,
      'author': 'Siarhei',
      'text': 'Hello World!'
    }]
  }

  const wrapper = shallow(<PostsList {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

