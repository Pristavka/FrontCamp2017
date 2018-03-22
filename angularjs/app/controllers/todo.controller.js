(() => {
  angular.module('app').controller('Todo', Todo);

  Todo.$inject = ['model', 'todoService'];
  function Todo(model, todoService) {
    this.todo = model;
    Object.assign(this, todoService);
  }
})();
