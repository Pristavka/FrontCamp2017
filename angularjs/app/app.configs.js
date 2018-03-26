// routes.$inject = ['$routeProvider'];

export const routes = $routeProvider => {
  $routeProvider
    .when('/', {
      template: '<task-list></task-list>'
    })
    .when('/addTask', {
      template: '<task-form></task-form>'
    })
    .when('/editTask/:id', {
      template: '<edit-form></edit-form>'
    })
    .otherwise('/');
};

// runApp.$inject = ['todoService', 'model'];
export const runApp = (todoService, model) => {
  todoService
    .getItems()
    .then(data => (model.items = data))
    .catch(err => console.log(err));
};
