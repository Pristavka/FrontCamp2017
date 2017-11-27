// Common getNews method
const getNews = url => {
  return fetch(url)
    .then(resp => resp.json())
};

const getLatestNews = () => {
  getNews(resources.bbc)
    .then(latestNews => renderLatestNews(latestNews))
};

const getSportNews = (url) => {
  getNews(url)
    .then(allnews => renderSportNews(allnews));
};
