import angular from 'angular';
import taskListComponent from './task-list.component';

const taskListModule = angular
  .module('taskListModule', [])
  .component('taskListComponent', taskListComponent)
  .name;

export default taskListModule;
