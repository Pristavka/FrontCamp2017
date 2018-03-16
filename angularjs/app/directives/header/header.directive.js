(() => {
  angular.module('app')
    .directive('headerApp', headerApp);

  function headerApp() {
    const directive = {
      restrict: 'E',
      templateUrl: 'directives/header/header.directive.html'
    };

    return directive;
  }

})();
