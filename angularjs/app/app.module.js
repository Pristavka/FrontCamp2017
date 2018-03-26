import angular from 'angular';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';

import { routes, runApp } from './app.configs';
import todoService from './services/todo.service';
import model from './services/model.service';
//import Todo from './controllers/todo.controller';

import AppComponent from './app.component';

import headerModule from './components/header/header.module';
// import taskFormModule from './components/task-form/task-form.module';
// import taskListModule from './components/task-list/task-list.module';
// import editModule from './components/edit-form/edit-form.module';

const AppModule = angular
  .module('app', [
    ngRoute,
    ngSanitize,
    headerModule,
    // taskFormModule,
    // taskListModule,
    // editModule
  ])
  .factory('todoService', todoService)
  .component('appComponent', AppComponent)
  .value('model', model)
  //.controller('Todo', Todo)
  .config(routes)
  //.run(runApp)
  .name;

// Bootstrap the app
document.addEventListener('DOMContentLoaded', () =>
  angular.bootstrap(document, ['app'])
);

export default AppModule;
