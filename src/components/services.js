export default class Services {
  getData(url) {
    return fetch(url, { mode: 'cors' }).then(resp => resp.json())
  };
};
