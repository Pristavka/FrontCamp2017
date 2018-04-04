import checkedItems from '../checkedItems.filter';

describe('The test checkedItems filter', () => {
  it('should capitalize a string', () => {
    const items = [
      { 'id': 1, 'action': 'Code Review...', 'done': false, 'expiry': 5},
      { 'id': 2, 'action': 'Verified by QA...', 'done': false, 'expiry': 7 },
      { 'id': 3, 'action': 'Not ready for Dev...', 'done': true, 'expiry': 11 },
      { 'id': 4, 'action': 'Ready to Release...', 'done': false, 'expiry': 3 },
      { 'id': 5, 'action': 'Ready for dev...', 'done': false, 'expiry': 1 },
      { 'id': 6, 'action': 'QA in progress...', 'done': false, 'expiry': 15 }
    ];

    const showComplete = true;

    let result = checkedItems()(items, showComplete);

    expect(result).toEqual(items);
  });
});