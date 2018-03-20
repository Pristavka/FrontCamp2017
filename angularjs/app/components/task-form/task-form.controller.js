(() => {
  angular.module('taskFormModule').controller('TaskForm', TaskForm);

  TaskForm.$inject = ['model', 'todoService'];
  function TaskForm(model, todoService) {
    this.todo = model;
    this.disableAddButton = true;
    Object.assign(this, todoService);
  }
})();