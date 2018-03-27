export const routes = $routeProvider => {
  $routeProvider
    .when('/', {
      template: '<task-list-component></task-list-component>'
    })
    .when('/addTask', {
      template: '<task-form-component></task-form-component>'
    })
    .when('/editTask/:id', {
      template: '<edit-form-component></edit-form-component>'
    })
    .otherwise('/');
};

export const runApp = (TodoService, model) => {
  TodoService
    .getItems()
    .then(data => (model.items = data))
    .catch(err => console.log(err));
};
