import "babel-polyfill";

import configs from './config/config';
import Controller from './components/controller';
import Services from './components/services';
import View from './components/view';


const controller = new Controller;
const services = new Services;
const view = new View;

view.renderMainContent();
view.setCurrentDate();
controller.getLatestNews(configs.resources.bbc);
controller.getSportSources(configs.resources.sources);
