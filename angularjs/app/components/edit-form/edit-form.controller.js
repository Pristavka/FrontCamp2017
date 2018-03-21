(() => {
  angular.module('editModule').controller('Edit', Edit);

  Edit.$inject = ['model', 'todoService', '$routeParams'];
  function Edit(model, todoService, $routeParams) {
    this.todo = model;
    this.editAction = this.todo.items.find(el => {
      if(el.id == $routeParams['id']) return el;
    });
  }
})();
