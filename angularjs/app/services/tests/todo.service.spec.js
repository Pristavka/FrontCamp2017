import TodoService from '../todo.service';

describe('TodoService', () => {
  it('should be not empty service', () => {
    expect(new TodoService).toBeTruthy();
  });
});
