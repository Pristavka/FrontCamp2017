(() => {
  angular.module('headerModule').controller('Header', Header);

  Header.$inject = ['model', 'todoService'];
  function Header(model, todoService) {
    this.todo = model;
    Object.assign(this, todoService);
  }
})();
