module.exports = function (source) {
  let jsn = JSON.parse(source);
  for(let index in jsn){
    if (typeof parseInt(index) == 'number') delete jsn['index']
  }

  return `module.exports = ${JSON.stringify(jsn)}`;
}