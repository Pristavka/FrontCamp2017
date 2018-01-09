import { configs } from '../config/config';
import getDataDecorator from './getDataDecorator';
import ContentRender from './contentRender';
import GetDataProxy from './getDataProxy';
import { createStore } from '../store/store';
import { getSources } from '../reducer/reducer';
import { updateSources } from '../actions/actions';

/*Observer and State patterns*/
const initialState = {
  sources: {}
}
const store = createStore(getSources, initialState);

const contentRender = new ContentRender;
const getDataProxy = new GetDataProxy;

store.subscribe(contentRender.renderSportNews)

export default class Main {
  static getLatestNews(url) {
    getDataDecorator.getData(url).then(latestNews => contentRender.renderLatestNews(latestNews))
  };
  static getSportNews(url) {
    getDataDecorator.getData(url).then(sportNews => store.dispatch(updateSources(sportNews)))
  };
  static getSportSources(url) {
    getDataProxy.getData(url)
      .then(src => { 
        import('./renderSportSources').then(module => {module.default.renderSportSources(src)})
        document.querySelector('#showButton').style = 'display:none';
      })
      .catch(e => alert(e))
  };
  static handleSourceClick(e) {
    Main.getSportNews(`${configs.newsapi}/top-headlines?sources=${e.target.id}&apiKey=${configs.api_key}`)
  };
};
