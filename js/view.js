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
};

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
};
