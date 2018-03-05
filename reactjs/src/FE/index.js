import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import api from '../api';
import App from './components/app';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const loggerMiddleware = store => next => action => {
  console.log(`Dispatching: ${action}`);
  next(action);
}

const confirmationMiddleware = store => next => action => {
  if (action.shouldConfirm) {
    if (confirm('Are you sure, you want to add this post?')) {
      next(action);
    }
  } else {
    next(action);
  }
}

const store = createStore(
  reducer,
  window.__PRELOADED_STATE__,
  applyMiddleware(thunk.withExtraArgument(api), loggerMiddleware, confirmationMiddleware)
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
