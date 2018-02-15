import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Main from './main';

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}
