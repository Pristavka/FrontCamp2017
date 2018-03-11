import React from 'react';
import Header from './header';

it('Should render a Header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

