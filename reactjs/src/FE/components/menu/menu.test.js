import React from 'react';
import Menu from './menu';

it('Should render a Menu', () => {
  const wrapper = shallow(<Menu />);
  expect(wrapper).toMatchSnapshot();
});

