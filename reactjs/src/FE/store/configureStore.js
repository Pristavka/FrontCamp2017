import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import api from '../../api';

const loggerMiddleware = store => next => action => {
  console.log(`Dispatching: ${action}`);
  next(action);
};

const confirmationMiddleware = store => next => action => {
  if (action.shouldConfirm) {
    if (confirm('Are you sure, you want to add this post?')) {
      next(action);
    }
  } else {
    next(action);
  }
};

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunk.withExtraArgument(api), loggerMiddleware, confirmationMiddleware)
  );
  return store;
};

export default configureStore;
