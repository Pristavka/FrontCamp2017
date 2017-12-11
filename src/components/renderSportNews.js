export default class RenderSportNews {
  static renderSportNews({ articles }) {
    const listOfsportNews = document.querySelector('.listOfsportNews');
    listOfsportNews.innerHTML = '';
    articles.forEach(art => {
      const div = document.createElement('div');
      div.className = 'sport__item';
      const news = `
              <img src="${art.urlToImage}" alt="${art.title}">
              <p class="latest__title">${art.title}</p>
              <p class="latest__url">
                <a href="${art.url}" target="_blank" rel="nooponer">Open original source</a>
              </p>
            `
      div.innerHTML = news;
      listOfsportNews.appendChild(div);
    })
  };

  static renderSportSources({ sources }) {
    const container = document.querySelector('.sportSourcesContainer');
    container.addEventListener('click', Controller.handleSourceClick);
    sources.forEach(src => {
      const div = document.createElement('div');
      const source = `
            <div class="sourceItem">
              <p><img src="${configs.iconURL}?url=${src.url}&size=${configs.iconSize}"
                alt="${src.name}" id="${src.id}"></p>
              <p class="sport__title">${src.name}</p>
            </div>
          `
      div.innerHTML = source;
      container.appendChild(div);
    })
  };
}