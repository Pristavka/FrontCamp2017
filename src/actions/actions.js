import services from './services';

export const GET_SOURCES = 'GET_SOURCES';

const getSources = sources => ({
  type: GET_SOURCES,
  sources
});

export const fetchSources = url => dispatch => {
  services.getData(url).then(sources => dispatch(getSources(sources)));
}