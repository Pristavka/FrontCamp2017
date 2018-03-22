(() => {
  angular.module('taskListModule').component('taskList', {
    templateUrl: 'components/task-list/task-list.html',
    controller: 'TaskListController',
    controllerAs: 'ctrl'
  });
})();
