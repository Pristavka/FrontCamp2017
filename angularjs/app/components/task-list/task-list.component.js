import template from './task-list.template';
import TaskListController from './task-list.controller';

const taskListComponent = {
  template,
  controller: TaskListController,
  controllerAs: 'ctrl'
};

export default taskListComponent;
