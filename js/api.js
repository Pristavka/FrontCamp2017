const getData = url => {
  return fetch(url)
    .then(resp => resp.json())
};
