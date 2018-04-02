import Model from '../model.service';

describe('Model exist', () => {
  it('userphoto should be images/logo.jpeg', () => {
    expect(Model.userPhoto).toBe('images/logo.jpeg');
  });
});