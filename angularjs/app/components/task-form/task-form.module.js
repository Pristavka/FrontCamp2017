import angular from 'angular';
import taskFormComponent from './task-form.component';

const taskFormModule = angular
  .module('taskFormModule', [])
  .component('taskFormComponent', taskFormComponent)
  .name;

export default taskFormModule;
