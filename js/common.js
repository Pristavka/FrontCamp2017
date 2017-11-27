; (() => {
  const api_key = 'eefc0a2a311a42dc8936f6dceba17753';
  const resources = {
    bbc: `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${api_key}`,
    espn: `https://newsapi.org/v2/top-headlines?sources=espn&apiKey=${api_key}`,
    nhl: `https://newsapi.org/v2/top-headlines?sources=nhl-news&apiKey=${api_key}`,
    marca: `https://newsapi.org/v2/top-headlines?sources=marca&apiKey=${api_key}`
  }

  const setCurrentDate = () => {
    const date = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    document.querySelector('.header__date').innerHTML = date.toLocaleString("en-US", options)
  }

  // Render Latest News
  const renderLatestNews = latestNews => {
    const news = `
    <h3 class="latest__source">${latestNews.articles[0].author}</h3>
    <div class="latest__img">
      <a href="${latestNews.articles[0].url}" target="_blank">
        <img src="${latestNews.articles[0].urlToImage}" alt="${latestNews.articles[0].title}">
      </a>
    </div>
    <p class="latest__title">${latestNews.articles[0].title}</p>
    <p class="latest__shortDescr">${latestNews.articles[0].description}</p>
    <p class="latest__url"><a href="${latestNews.articles[0].url}" target="_blank">Open original source</a></p>
    <p class="latest__published"><b>Date of publication:</b> ${latestNews.articles[0].publishedAt}</p>
  `
  document.querySelector('.latest__itemNews').innerHTML = news;
  }

  // Render Sport News
  const listOfsportNews = document.querySelector('.listOfsportNews');
  const renderSportNews = allnews => {
    listOfsportNews.innerHTML = '';
    allnews.articles.forEach(art => {
      const div = document.createElement('div');
      div.className = 'sport__item';
      const news = `
        <p class="latest__title">${art.title}</p>
        <p class="latest__shortDescr">${art.description}</p>
        <p class="latest__url"><a href="${art.url}" target="_blank">Open original source</a></p>
      `
      div.innerHTML = news;
      listOfsportNews.appendChild(div);
    })
  }

  // Common getNews method
  const getNews = url => {
    return fetch(url)
      .then(resp => resp.json())
  }

  const getLatestNews = () => {
    getNews(resources.bbc)
      .then( latestNews => renderLatestNews(latestNews))
  }

  const getSportNews = (url) => {
    getNews(url)
      .then(allnews => renderSportNews(allnews));
  }

  document.querySelector('.espn').addEventListener('click', () => {getSportNews(resources.espn)});
  document.querySelector('.nhl').addEventListener('click', () => {getSportNews(resources.nhl)});
  document.querySelector('.marca').addEventListener('click', () => {getSportNews(resources.marca)});

  setCurrentDate();
  getLatestNews();
})()
