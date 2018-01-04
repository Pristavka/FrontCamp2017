import { GET_SOURCES } from '../actions/actions';

const getSources = (state = {}, action) => {
  switch (action.type) {
    case GET_SOURCES: return action.sources
    default: state
  }
}