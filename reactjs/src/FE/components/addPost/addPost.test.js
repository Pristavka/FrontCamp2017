import React from 'react';
import AddPost from './addPost';

it('Should render a AddPost', () => {
  const wrapper = shallow(<AddPost />);
  expect(wrapper).toMatchSnapshot();
});

