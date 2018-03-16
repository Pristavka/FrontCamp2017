(() => {
  angular.module('app').controller('Todo', Todo);

  Todo.$inject = ['model', 'todoService'];
  function Todo(model, todoService) {
    let $ctrl = this;
    $ctrl.todo = model;
    Object.assign($ctrl, todoService);
  }
})();
