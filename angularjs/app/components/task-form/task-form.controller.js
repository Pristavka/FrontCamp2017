(() => {
  angular.module('taskFormModule').controller('TaskFormController', TaskFormController);

  TaskFormController.$inject = ['model', 'todoService'];
  function TaskFormController(model, todoService) {
    this.todo = model;
    this.disableAddButton = false;
    Object.assign(this, todoService);
    return this;
  }
})();