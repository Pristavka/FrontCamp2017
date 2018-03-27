export default class EditFormController {
  constructor(model, $routeParams) {
    this.todo = model;
    this.$routeParams = $routeParams;

    this.$onInit = this.$onInit.bind(this);
  }

  $onInit() {
    this.editAction = this.todo.items.find(el => {
      if(el.id == this.$routeParams['id']) return el;
    });
  }
}
