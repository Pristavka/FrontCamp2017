import angular from 'angular';
import headerComponent from './header.component';

const headerModule = angular
  .module('headerModule', [])
  .component('headerComponent', headerComponent)
  .name;

export default headerModule;
