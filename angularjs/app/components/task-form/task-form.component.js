(() => {
  angular.module('taskFormModule').component('taskForm', {
    templateUrl: 'components/task-form/task-form.html',
    controller: 'TaskFormController',
    controllerAs: 'ctrl'
  });
})();