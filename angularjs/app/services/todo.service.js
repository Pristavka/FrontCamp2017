const todoService = ($http, $q) => {
  return {
    addNewItem,
    checkAddActionField,
    deleteItem,
    saveItem,
    getItems,
    getExpiryDate,
    incompleteCount,
    warningLevel
  };

  function addNewItem(items, newItem) {
    if (!newItem && !newItem.action) return;
    items.push({
      id: Date.now(),
      action: newItem.action,
      done: false,
      expiry: 10
    });
    newItem.action = '';
  }

  function deleteItem(items, item) {
    items.find((el, i) => {
      if (el === item) items.splice(i, 1);
    });
  }

  function saveItem(items, changedItem) {
    items.find(el => {
      if (el.id === changedItem.id) el.action = changedItem.action;
    });
    changedItem.action = '';
  }

  function checkAddActionField(disableAddButton, newItem) {
    if (newItem.length < 20) {
      disableAddButton = true;
      return;
    }
    disableAddButton = false;
    return;
  }

  function getItems() {
    return $http
      .get('data/todo.json')
      .then(resp => resp.data)
      .catch(() => $q.reject('Error'));
  }

  function getExpiryDate(date) {
    const now = new Date();
    return now.setDate(now.getDate() + date);
  }

  function incompleteCount(items) {
    let count = 0;

    items.forEach(item => {
      if (!item.done) count++;
    });

    return count;
  }

  function warningLevel(items) {
    return incompleteCount(items) < 3 ? 'label-success' : 'label-warning';
  }
};

export default todoService;
