export default class Services {
  getData(url) {
    fetch(url, { mode: 'cors' }).then(resp => resp.json())
  };
};
