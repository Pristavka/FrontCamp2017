import "babel-polyfill";

import { configs } from './config/config';
import Controller from './components/controller';
import View from './components/view';
import { logo, smallLogo } from './assets/index';
import './styles/style.scss';
// import './config/test.json';

View.renderMainContent();
View.setCurrentDate();
Controller.getLatestNews(configs.resources.bbc);
Controller.getSportSources(configs.resources.sources);
