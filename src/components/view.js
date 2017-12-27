import { configs } from '../config/config';
import Controller from './controller'

export default class View {
  constructor(){
    this._sectionNews;
    this._sectionSportList
  }
  setCurrentDate() {
    document.querySelector('.header__date').innerHTML = new Date().toLocaleString("en-US", configs.timeOptions)
  };
  renderSectionNews(){
    const sectionNews = document.createElement('section');
    sectionNews.className = 'news';
    sectionNews.innerHTML = `
      <div class="news__latest latest">
        <h1>Latest <span class="latest__mark">News</span></h1>
        <div class="latest__itemNews"></div>
      </div>
      <div class="news__sport sport">
          <h1>Sport <span class="latest__mark">News</span></h1>
          <h3 class="latest__source">Please, choose News source</h3>
          <p><button id="showButton">Show Sources</button></p>
          <div class="sportSourcesContainer"></div>
      </div>
    `;
    this._sectionNews = sectionNews;
    return sectionNews;
  }
  renderSectionSportList(){
    const sectionSportList = document.createElement('section');
    sectionSportList.className = 'listOfsportNews';
    this._sectionSportList = sectionSportList;
    return sectionSportList;
  }
  getSectionNews(){
    if (this._sectionNews) return this._sectionNews
    return this.renderSectionNews();
  }
  getSectionSportList(){
    if (this._sectionSportList) return this._sectionSportList
    return this.renderSectionSportList();
  }
  renderMainContent() {
    document.querySelector('main').appendChild(this.getSectionNews());
    document.querySelector('main').appendChild(this.getSectionSportList());
    document.querySelector('#showButton')
      .addEventListener('click',() => Controller.getSportSources(configs.resources.sources));
  };
  renderLatestNews({ articles: [art] }) {
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
    `
    document.querySelector('.latest__itemNews').innerHTML = news;
  };
  renderSportNews({ articles }) {
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
};
