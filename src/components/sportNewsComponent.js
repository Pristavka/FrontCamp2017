export default class SportNewsComponent {
  constructor(){
    this._sectionSportList;
  }
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
      `;
      div.innerHTML = news;
      listOfsportNews.appendChild(div);
    });
  }
  renderSectionSportList(){
    const sectionSportList = document.createElement('section');
    sectionSportList.className = 'listOfsportNews';
    this._sectionSportList = sectionSportList;
    return sectionSportList;
  }
  getSectionSportList(){
    if (this._sectionSportList) return this._sectionSportList;
    return this.renderSectionSportList();
  }
}