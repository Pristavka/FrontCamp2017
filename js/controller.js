const setCurrentDate = () => {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  document.querySelector('.header__date').innerHTML = date.toLocaleString("en-US", options)
};

const getLatestNews = (url) => {
  getData(url)
    .then(latestNews => {
      renderLatestNews(latestNews);
    })
}

const getSportNews = (url) => {
  getData(url)
    .then(sportNews => {
      renderSportNews(sportNews);
    })
}

const getSportSources = (url) => {
  getData(url)
    .then(src => {
      renderSportSources(src);
    })
}

renderMainContent();
setCurrentDate();
getLatestNews(resources.bbc);
getSportSources(resources.sources);
