import React from 'react';
import Message from './massage';

it('Should render a Message', () => {
  const wrapper = shallow(<Message />);
  expect(wrapper).toMatchSnapshot();
});

