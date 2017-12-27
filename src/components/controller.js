import { configs } from '../config/config';
import services from './services';
import View from './view';
import Security from './security'

// const services = new Services;
const view = new View;
const security = new Security;

export default class Controller {
  static getLatestNews(url) {
    services.getData(url).then(latestNews => view.renderLatestNews(latestNews))
  };
  static getSportNews(url) {
    services.getData(url).then(sportNews => view.renderSportNews(sportNews))
  };
  static getSportSources(url) {
    security.getSecurityData(url)
      .then(src => { 
        import('./renderSportNews').then(module => {module.default.renderSportSources(src)})
        document.querySelector('#showButton').style = 'display:none';
      })
      .catch(e => alert(e))
  };
  static handleSourceClick(e) {
    Controller.getSportNews(`${configs.newsapi}/top-headlines?sources=${e.target.id}&apiKey=${configs.api_key}`)
  };
};
