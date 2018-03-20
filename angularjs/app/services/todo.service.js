(() => {
  angular.module('app').factory('todoService', todoService);

  todoService.$inject = ['$http', '$q'];
  function todoService($http, $q) {
    return {
      addNewItem,
      checkAddActionField,
      deleteItem,
      getItems,
      getExpiryDate,
      incompleteCount,
      warningLevel
    };

    function addNewItem(items, newItem) {
      if (!newItem && !newItem.action) return;
      items.push({
        action: newItem.action,
        done: false,
        expiry: 10
      });
      newItem.action = '';
    }

    function deleteItem(items, item) {
      items.find((el, i) => {
        if(el === item) items.splice(i, 1);
      });
    }

    function checkAddActionField(disableAddButton, newItem) {
      if(newItem.length < 20) {
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

      angular.forEach(items, item => {
        if (!item.done) count++;
      });

      return count;
    }

    function warningLevel(items) {
      return incompleteCount(items) < 3 ? 'label-success' : 'label-warning';
    }
  }
})();
