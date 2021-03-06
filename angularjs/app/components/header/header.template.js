const headerTemplate = `<div class="page-header">
  <h1>
    <img
      class="photo"
      ng-src="{{::ctrl.todo.userPhoto}}"
    > {{::ctrl.todo.user}}'s To Do List
    <span
      class="label label-default"
      ng-if="ctrl.todoService.incompleteCount(ctrl.todo.items) !== 0"
      ng-class="ctrl.todoService.warningLevel(ctrl.todo.items)"
    >
      {{ctrl.todoService.incompleteCount(ctrl.todo.items)}}
    </span>
  </h1>
</div>`;

export default headerTemplate;
