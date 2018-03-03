import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import reducer from './reducers';

import App from './components/app';

// const loggerMiddleware = store => next => action => {
//   console.log(`Dispatching: ${action}`);
//   next(action);
// }

// const confirmationMiddleware = store => next => action => {
//   if (action.shouldConfirm) {
//     if (confirm('Are you sure, you want to delete this post?')) {
//       next(action);
//     }
//   } else {
//     next(action);
//   }
// }

// const store = createStore(
//   reducer,
//   applyMiddleware(thunk.withExtraArgument(api), loggerMiddleware, confirmationMiddleware)
// );

ReactDOM.hydrate(
  //<Provider store={store}>
    <App />,
  //</Provider>,
  document.getElementById('root')
);
