import img from '../../images/logo.jpeg';

export default class HeaderController {
  constructor(model, TodoService) {
    this.todo = model;
    this.todo.userPhoto = img;
    this.todoService = TodoService;
  }
}