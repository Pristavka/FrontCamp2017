const setCurrentDate = () => {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  //this line have to be in view but now it is here =)
  document.querySelector('.header__date').innerHTML = date.toLocaleString("en-US", options)
};

setCurrentDate();
getLatestNews();
getSportSources(resources.sources);