import angular from 'angular';

const checkedItems = () => {
  return (items, showComplete) => {
    if(!angular.isArray(items)) return items;

    let result = [];
    angular.forEach(items, item => {
      if(!item.done || showComplete) {
        result.push(item);
      }
    });
    return result;
  };
};

export default checkedItems;
