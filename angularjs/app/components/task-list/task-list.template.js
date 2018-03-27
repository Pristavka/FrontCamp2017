
const taskListTemplate = `<div class="panel">
  <label for="action">Find action:</label>
  <div class="input-group">
    <input
      class="form-control"
      ng-model="ctrl.search.action"
      placeholder="Search..."
    />
  </div>
</div>
<div class="panel panel-primary">
	<div class="panel-heading">
    <span
      class="glyphicon glyphicon-tasks"
      aria-hidden="true"
    ></span> To Do List
	</div>
	<div class="panel-body">
		<table class="table table-striped">
      <thead>
        <tr>
          <th>Description</th>
          <th>Checkbox</th>
          <th>Expiry</th>
          <th>Done</th>
          <th class="text-right">Commands</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="item in ctrl.todo.items | checkedItems: ctrl.showComplete | orderBy: ['expiry'] | filter: ctrl.search.action">
          <td ng-bind="item.action"></td>
          <td>
            <input
              type="checkbox"
              ng-model="item.done"
            >
          </td>
          <td>{{ctrl.todoService.getExpiryDate(item.expiry) | date: "dd MMM yyyy"}}</td>
          <td>{{item.done ? 'Yes' : 'No'}}</td>
          <td class="text-right">
            <button type="button" class="btn btn-primary">
              <a ng-href="#!/editTask/{{item.id}}" style="color:#fff">
                <span
                  class="glyphicon glyphicon-edit"
                  aria-hidden="true"
                  title="Edit"
                ></span>
              </a>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              ng-click="ctrl.todoService.deleteItem(ctrl.todo.items, item)"
            >
              <span
                class="glyphicon glyphicon-trash"
                aria-hidden="true"
                title="Delete"
              ></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <label>
      <input type="checkbox" ng-model="ctrl.showComplete">Show Complete
    </label>
  </div>
</div>`;

export default taskListTemplate;