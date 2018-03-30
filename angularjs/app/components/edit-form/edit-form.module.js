import angular from 'angular';
import editFormComponent from './edit-form.component';

const editModule = angular
  .module('editModule', [])
  .component('editFormComponent', editFormComponent)
  .name;

export default editModule;