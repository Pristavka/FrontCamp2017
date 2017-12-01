module.exports = function (babel) {
  return {
    visitor: {
      Program(path) {
        console.log(path.get('tokens'));
      }
    }
  }
}