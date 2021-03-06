const editFormTemplate = `<div class="panel">
  <form novalidate name="newTask">
    <div class="form-group">
      <label for="action">Edit action <b>{{ctrl.editAction.action}}</b>:</label>
      <div class="input-group">
        <input
          id="action"
          name="action"
          class="form-control"
          ng-model="ctrl.newItem.action"
          placeholder="Change action..."
        />
        <span class="input-group-btn">
          <button
            class="btn btn-primary"
            ng-click="ctrl.saveItem(ctrl.todo.items, ctrl.newItem)"
            ng-disabled="!ctrl.newItem.action"
          >Save</button>
        </span>
      </div>
    </div>
  </form>
</div>`;

export default editFormTemplate;
