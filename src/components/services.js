export default class Services {
  static getData(url) {
    return fetch(url, { mode: 'cors' }).then(resp => resp.json())
  };
};
