(() => {
  angular.module('editModule').controller('EditFormController', EditFormController);

  EditFormController.$inject = ['model', 'todoService', '$routeParams'];
  function EditFormController(model, todoService, $routeParams) {
    this.todo = model;
    this.editAction = this.todo.items.find(el => {
      if(el.id == $routeParams['id']) return el;
    });
    return this;
  }
})();
