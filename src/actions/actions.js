export const GET_SOURCES = 'GET_SOURCES';
export const GET_LATEST_NEWS = 'GET_LATEST_NEWS';

export const updateSources = sources => ({
  type: GET_SOURCES,
  sources
});

export const updateLatestNews = latestNews => ({
  type: GET_LATEST_NEWS,
  latestNews
});
