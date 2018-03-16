(() => {
  angular.module('app')
    .directive('taskForm', taskForm);

  function taskForm() {
    const directive = {
      restrict: 'E',
      templateUrl: 'directives/task-form/task-form.directive.html'
    };

    return directive;
  }

})();
