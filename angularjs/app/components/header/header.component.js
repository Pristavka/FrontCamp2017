import template from './header.template.js';
import HeaderController from './header.controller';

const headerComponent = {
  template,
  controller: HeaderController,
  controllerAs: 'ctrl'
};

export default headerComponent;