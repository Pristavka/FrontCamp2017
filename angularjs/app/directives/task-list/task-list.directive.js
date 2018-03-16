(() => {
  angular.module('app').directive('taskList', taskList);

  function taskList() {
    const directive = {
      restrict: 'E',
      templateUrl: 'directives/task-list/task-list.directive.html'
    };

    return directive;
  }
})();
