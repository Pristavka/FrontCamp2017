import configs from '../config/config';
import Services from './services';
import View from './view';

const services = new Services;
const view = new View;
export default class Controller {

  getLatestNews(url) {
    services.getData(url).then(latestNews => view.renderLatestNews(latestNews))
  };

  getSportNews(url) {
    services.getData(url).then(sportNews => view.renderSportNews(sportNews))
  };

  getSportSources(url) {
    services.getData(url).then(src => view.renderSportSources(src))
  };

  handleSourceClick(e) {
    this.getSportNews(`${configs.newsapi}/top-headlines?sources=${e.target.id}&apiKey=${configs.api_key}`)
  };
};
