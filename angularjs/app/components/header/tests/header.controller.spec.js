import HeaderController from '../header.controller';
import Model from '../../../services/model.service';
import TodoService from '../../../services/todo.service';

describe('HeaderController', () => {
  it('should create todos', () => {
    const scope = new HeaderController(Model, new TodoService);

    expect(scope.todo).toBeDefined();
  });
});