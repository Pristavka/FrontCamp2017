export default class TodoService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  addNewItem(items, newItem) {
    if (!newItem && !newItem.action) return;
    items.push({
      id: Date.now(),
      action: newItem.action,
      done: false,
      expiry: 10
    });
    newItem.action = '';
  }

  deleteItem(items, item) {
    items.find((el, i) => {
      if (el === item) items.splice(i, 1);
    });
  }

  saveItem(items, changedItem) {
    items.find(el => {
      if (el.id === changedItem.id) el.action = changedItem.action;
    });
    changedItem.action = '';
  }

  checkAddActionField(disableAddButton, newItem) {
    if (newItem.length < 20) {
      disableAddButton = true;
      return;
    }
    disableAddButton = false;
    return;
  }

  getItems() {
    return this.$http
      .get('data/todo.json')
      .then(resp => resp.data)
      .catch(() => this.$q.reject('Error'));
  }

  getExpiryDate(date) {
    const now = new Date();
    return now.setDate(now.getDate() + date);
  }

  incompleteCount(items) {
    let count = 0;
    items.forEach(item => {
      if (!item.done) count++;
    });
    return count;
  }

  warningLevel(items) {
    return this.incompleteCount(items) < 3 ? 'label-success' : 'label-warning';
  }
}
