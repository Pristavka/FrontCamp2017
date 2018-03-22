(() => {
  angular.module('headerModule').controller('HeaderController', HeaderController);

  HeaderController.$inject = ['model', 'todoService'];
  function HeaderController(model, todoService) {
    this.todo = model;
    Object.assign(this, todoService);
    return this;
  }
})();
