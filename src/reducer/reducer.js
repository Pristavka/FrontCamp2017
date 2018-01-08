import { GET_SOURCES } from '../actions/actions';

export const getSources = (state, action) => {
  switch (action.type) {
    case GET_SOURCES: return Object.assign({}, state, {sources: action.sources})
    default: state
  }
}
