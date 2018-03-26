import img from '../../images/logo.jpeg';

export default class HeaderController {
  constructor(model) {
    this.todo = model;
    this.todo.userPhoto = img;
  }
}