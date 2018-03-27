export default class TaskListController {
  constructor(model, TodoService) {
    this.todo = model;
    this.showComplete = false;
    this.todoService = TodoService;
  }
}
