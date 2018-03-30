export default class TaskFormController {
  constructor(model, TodoService) {
    this.todo = model;
    this.todoService = TodoService;
  }
}
