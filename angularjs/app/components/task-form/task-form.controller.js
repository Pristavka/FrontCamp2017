export default class TaskFormController {
  constructor(model, TodoService) {
    this.todo = model;
    this.disableAddButton = false;
    this.todoService = TodoService;
  }
}
