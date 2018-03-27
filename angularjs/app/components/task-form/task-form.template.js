const taskFormTemplate = `<div class="panel">
  <form novalidate name="newTask">
    <div class="form-group">
      <label for="action">Add action:</label>
      <div class="input-group">
        <input
          id="action"
          name="action"
          class="form-control"
          ng-model="ctrl.newItem.action"
          ng-change="ctrl.todoService.checkAddActionField(ctrl.disableAddButton, ctrl.newItem.action)"
          placeholder="Add new action..."
        />
        <span class="input-group-btn">
          <button
            class="btn btn-primary"
            ng-click="ctrl.todoService.addNewItem(ctrl.todo.items, ctrl.newItem)"
            ng-disabled="ctrl.disableAddButton"
          >Add</button>
        </span>
      </div>
    </div>
  </form>
</div>`;

export default taskFormTemplate;
