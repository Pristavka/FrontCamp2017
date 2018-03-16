(() => {
  angular.module('app')
    .factory('todoService', todoService);

  todoService.$inject = ['$http', '$q'];
  function todoService($http, $q) {
    return {
      addNewItem,
      getItems,
      incompleteCount,
      warningLevel
    };

    function addNewItem(items, newItem) {
      if(!newItem && !newItem.action) return;
      items.push({
        action: newItem.action,
        done: false
      });
      newItem.action = '';
    }

    function getItems() {
      return $http.get('data/todo.json')
        .then(resp => resp.data)
        .catch(() => $q.reject('Error'));
    }

    function incompleteCount(items) {
      let count = 0;

      angular.forEach(items, item => {
        if(!item.done) count++
      })

      return count;
    }

    function warningLevel(items) {
      return incompleteCount(items) < 3
        ? 'label-success'
        : 'label-warning';
    }
  }

})();
