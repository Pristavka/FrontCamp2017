import 'babel-polyfill';

import { configs } from './config/config';
import Main from './components/main';
import ContentRender from './components/contentRender';
import { logo, smallLogo } from './assets/index';
import './styles/style.scss';
import './config/mockData.json';

const contentRender = new ContentRender;

contentRender.renderMainContent();
contentRender.setCurrentDate();
Main.getLatestNews(configs.resources.bbc);
