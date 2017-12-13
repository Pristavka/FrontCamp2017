module.exports = source => {
  const jsn = JSON.parse(source);
  let newJSON = {};
  for(let index in jsn){
    if (!Number(index)) newJSON[index] = jsn[index];
  }
  return JSON.stringify(newJSON, null, '\t');
}