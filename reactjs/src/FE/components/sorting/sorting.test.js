import React from 'react';
import Sorting from './sorting';

it('Should render a Sorting', () => {

  const props = {
    sortPosts: jest.fn(),
    posts: [{
      '_id': 12354347,
      'author': 'Siarhei',
      'text': 'Hello World!'
    }]
  }

  const wrapper = shallow(<Sorting {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

