import { configs } from '../config/config';
import Services from './services';
import View from './view';

export default class Controller {
  static getLatestNews(url) {
    Services.getData(url).then(latestNews => View.renderLatestNews(latestNews))
  };
  static getSportNews(url) {
    Services.getData(url).then(sportNews => View.renderSportNews(sportNews))
  };
  static getSportSources(url) {
    Services.getData(url).then(src => { 
      import('./renderSportNews').then(module => {module.default.renderSportSources(src)})
      document.querySelector('#showButton').style = 'display:none';
    })
  };
  static handleSourceClick(e) {
    Controller.getSportNews(`${configs.newsapi}/top-headlines?sources=${e.target.id}&apiKey=${configs.api_key}`)
  };
};
