import React from 'react';
import PostsList from './postsList';

it('Should render a PostsList', () => {
  const fetchAllPostsSpy = jest.fn();

  const post = {
    'author': 'Siarhei',
    'text': 'Hello World!'
  }

  const wrapper = shallow(<PostsList post={post} fetchAllPostsSpy={fetchAllPostsSpy}/>);
  expect(wrapper).toMatchSnapshot();
});

