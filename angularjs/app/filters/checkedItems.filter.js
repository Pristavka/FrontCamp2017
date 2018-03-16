(() => {
  angular.module('app')
    .filter('checkedItems', checkedItems);

    function checkedItems() {
      return function(items, showComplete) {
        if(!angular.isArray(items)) return items;

        let result = [];
        angular.forEach(items, item => {
          if(!item.done || showComplete) {
            result.push(item);
          };
        });
        return result;
      }
    }

})();
