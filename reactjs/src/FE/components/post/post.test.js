import React from 'react';
import Post from './post';

it('Should render a Post', () => {
  const post = {
    'author': 'Siarhei',
    'text': 'Hello World!'
  }

  const wrapper = shallow(<Post post={post}/>);
  expect(wrapper).toMatchSnapshot();
});

