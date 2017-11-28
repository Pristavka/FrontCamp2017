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

setCurrentDate();
getLatestNews(resources.bbc);
getSportSources(resources.sources);
