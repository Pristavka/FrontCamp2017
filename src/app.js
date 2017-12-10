import "babel-polyfill";

import { configs } from './config/config';
import Controller from './components/controller';
import View from './components/view';
import './styles/style.css';
import './assets/logo.png';
import './assets/logo-sm.png';

View.renderMainContent();
View.setCurrentDate();
Controller.getLatestNews(configs.resources.bbc);
Controller.getSportSources(configs.resources.sources);
