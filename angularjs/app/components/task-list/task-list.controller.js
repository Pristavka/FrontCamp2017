(() => {
  angular.module('taskListModule').controller('TaskList', TaskList);

  TaskList.$inject = ['model', 'todoService'];
  function TaskList(model, todoService) {
    this.todo = model;
    Object.assign(this, todoService);
  }
})();