export default class LatestNewsComponent{
  static renderLatestNews({ latestNews: { articles: [art] }}) {
    const news = `
    <h3 class="latest__source">${art.author}</h3>
    <div class="latest__img">
      <p><a href="${art.url}" target="_blank" rel="nooponer">
        <img src="${art.urlToImage}" alt="${art.title}">
      </a></p>
    </div>
    <p class="latest__title">${art.title}</p>
    <p class="latest__shortDescr">${art.description}</p>
    <p class="latest__url">
      <a href="${art.url}" target="_blank" rel="nooponer">Open original source</a>
    </p>
    <p class="latest__published"><b>Date of publication:</b> ${art.publishedAt}</p>
  `;
    document.querySelector('.latest__itemNews').innerHTML = news;
  }
}