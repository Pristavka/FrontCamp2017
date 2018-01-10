import { GET_SOURCES, GET_LATEST_NEWS } from '../actions/actions';

export const getSources = (state, action) => {
  switch (action.type) {
  case GET_SOURCES: return Object.assign({}, state, {sources: action.sources});
  case GET_LATEST_NEWS: return Object.assign({}, state, {latestNews: action.latestNews});
  default: state;
  }
};
