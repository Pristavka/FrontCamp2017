(() => {
  angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'headerModule',
    'taskFormModule',
    'taskListModule',
    'editModule'
  ]);

  angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
  });

})();
