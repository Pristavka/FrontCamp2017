module.exports = function (source) {
  var jsn = JSON.parse(source);
  var newJSON = {};
  for(var index in jsn){
    if (!Number(index)) newJSON[index] = jsn[index];
  }

  return JSON.stringify(newJSON, null, '\t');
}