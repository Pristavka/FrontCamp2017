(() => {

  angular.module('app')
    .run(runApp);

  angular.element(document).ready(() => {
    angular.bootstrap(document, ['app'])
  });

  runApp.$inject = ['todoService', 'model'];
  function runApp(todoService, model) {
    todoService.getItems()
      .then(data => model.items = data)
      .catch(err => console.log(err));
  }
  
})();
