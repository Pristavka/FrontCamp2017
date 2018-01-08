import { configs } from '../config/config';
import services from './services';
import View from './view';
import Security from './security';
import { createStore } from '../store/store';
import { getSources } from '../reducers/reducers';
import { updateSources } from '../actions/actions';

/*Observer and State patterns*/
const initialState = {
  sources: {}
}
const store = createStore(getSources, initialState);

const view = new View;
const security = new Security;

export default class Controller {
  static getLatestNews(url) {
    services.getData(url).then(latestNews => view.renderLatestNews(latestNews))
  };
  static getSportNews(url) {
    store.subscribe(view.renderSportNews)
    services.getData(url).then(sportNews => store.dispatch(updateSources(sportNews)))
  };
  static getSportSources(url) {
    security.getData(url)
      .then(src => { 
        import('./renderSportSources').then(module => {module.default.renderSportSources(src)})
        document.querySelector('#showButton').style = 'display:none';
      })
      .catch(e => alert(e))
  };
  static handleSourceClick(e) {
    Controller.getSportNews(`${configs.newsapi}/top-headlines?sources=${e.target.id}&apiKey=${configs.api_key}`)
  };
};
