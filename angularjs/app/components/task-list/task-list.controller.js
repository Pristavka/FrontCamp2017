(() => {
  angular.module('taskListModule').controller('TaskListController', TaskListController);

  TaskListController.$inject = ['model', 'todoService'];
  function TaskListController(model, todoService) {
    this.todo = model;
    Object.assign(this, todoService);
    return this;
  }
})();