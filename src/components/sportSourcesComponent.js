/*Singleton pattern*/
export default class SportSourcesComponent {
  constructor(){
    this._sectionNews;
  }
  static renderSectionNews(){
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
  static getSectionNews(){
    if (this._sectionNews) return this._sectionNews;
    return this.renderSectionNews();
  }
}
