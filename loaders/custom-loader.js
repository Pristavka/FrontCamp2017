module.exports = function (source) {
  var src = JSON.parse(source);
  for (var i in src){
    if (typeof parseInt(i) === 'Number'){
      console.log('Hello JSON')
    }
  }
  return source
}