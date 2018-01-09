import { getDataDecorator } from './getDataComponent';
import { getDataProxy } from './getDataComponent';
import { getSources } from '../reducer/reducer';
import { updateSources } from '../actions/actions';
import SportSourcesComponent from './sportSourcesComponent';
import LatestNewsComponent from './latestNewsComponent';
import SportNewsComponent from './sportNewsComponent';

import { createStore } from '../store/store';
import { configs } from '../config/config';
/*Observer, Prototype and State patterns*/
const initialState = {sources: {}}
const store = createStore(getSources, initialState);
const sportNewsComponent = new SportNewsComponent;

store.subscribe(sportNewsComponent.renderSportNews)

export default class MainComponent {
  static getLatestNews(url) {
    getDataDecorator.getData(url).then(latestNews => LatestNewsComponent.renderLatestNews(latestNews))
  };
  static getSportNews(url) {
    getDataDecorator.getData(url).then(sportNews => store.dispatch(updateSources(sportNews)))
  };
  static getSportSources(url) {
    getDataProxy.getData(url)
      .then(src => { 
        import('./sportNewsItemsComponent').then(module => {module.default.renderSportSources(src)})
        document.querySelector('#showButton').style = 'display:none';
      })
      .catch(e => alert(e))
  };
  static handleSourceClick(e) {
    MainComponent.getSportNews(`${configs.newsapi}/top-headlines?sources=${e.target.id}&apiKey=${configs.api_key}`)
  };
  static renderMainContent(){
    document.querySelector('main').appendChild(SportSourcesComponent.getSectionNews());
    document.querySelector('main').appendChild(sportNewsComponent.getSectionSportList());
    document.querySelector('#showButton')
      .addEventListener('click',() => MainComponent.getSportSources(configs.resources.sources));
  }
  static setCurrentDate(){
    document.querySelector('.header__date').innerHTML = new Date().toLocaleString('en-US', configs.timeOptions);
  }
};
