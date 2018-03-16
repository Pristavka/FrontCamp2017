import React from 'react';
import Main from './main';

it('Should render a Main', () => {
  const wrapper = shallow(<Main />);
  expect(wrapper).toMatchSnapshot();
});

