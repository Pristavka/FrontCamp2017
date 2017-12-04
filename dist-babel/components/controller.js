"use strict";

var getLatestNews = function getLatestNews(url) {
  return getData(url).then(function (latestNews) {
    return renderLatestNews(latestNews);
  });
};
var getSportNews = function getSportNews(url) {
  return getData(url).then(function (sportNews) {
    return renderSportNews(sportNews);
  });
};
var getSportSources = function getSportSources(url) {
  return getData(url).then(function (src) {
    return renderSportSources(src);
  });
};
var handleSourceClick = function handleSourceClick(e) {
  return getSportNews(newsapi + "/top-headlines?sources=" + e.target.id + "&apiKey=" + api_key);
};

renderMainContent();
setCurrentDate();
getLatestNews(resources.bbc);
getSportSources(resources.sources);