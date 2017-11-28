const renderLatestNews = latestNews => {
  const news = `
    <h3 class="latest__source">${latestNews.articles[0].author}</h3>
    <div class="latest__img">
      <p><a href="${latestNews.articles[0].url}" target="_blank">
        <img src="${latestNews.articles[0].urlToImage}" alt="${latestNews.articles[0].title}">
      </a></p>
    </div>
    <p class="latest__title">${latestNews.articles[0].title}</p>
    <p class="latest__shortDescr">${latestNews.articles[0].description}</p>
    <p class="latest__url"><a href="${latestNews.articles[0].url}" target="_blank">Open original source</a></p>
    <p class="latest__published"><b>Date of publication:</b> ${latestNews.articles[0].publishedAt}</p>
  `
  document.querySelector('.latest__itemNews').innerHTML = news;
};

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

const renderSportSources = sources => {
  const container = document.querySelector('.sportSourcesContainer');
  sources.sources.forEach(src => {
    const div = document.createElement('div');
    const source = `
      <div class="sourceItem">
        <p><img src="https://icons.better-idea.org/icon?url=${src.url}&size=70..120..200" alt="${src.name}" id="${src.id}"</p>
        <p class="sport__title">${src.name}</p>
      </div>
    `
    div.innerHTML = source;
    container.appendChild(div);
    document.querySelector(`#${src.id}`)
      .addEventListener('click', () => getSportNews(`https://newsapi.org/v2/top-headlines?sources=${src.id}&apiKey=${api_key}`))
  })
}
