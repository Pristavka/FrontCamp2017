export default class Services {
  static getData(url) {
    fetch(url, { mode: 'cors' }).then(resp => resp.json())
  };
};
