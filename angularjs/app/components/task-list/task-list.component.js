(() => {
  angular.module('taskListModule').component('taskList', {
    templateUrl: 'components/task-list/task-list.html',
    controller: 'TaskList',
    controllerAs: 'ctrl'
  });
})();
