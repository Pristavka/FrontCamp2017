import { configs } from '../config/config';

/*Proxy and Decorator pattern*/
class GetDataProxy{
  constructor(getProxy){
    this.getDataProxy = getProxy;
  }
  getData(url){
    const password = prompt('Enter the Password, please');
    if (password === configs.password) return this.getDataProxy.getData(url);
    alert('You don\'t know the Password, get out from your computer!');
    return Promise.reject('Or try once more =)');
  }
}
class GetData{
  getData(url){
    return fetch(url, { mode: 'cors' });
  }
}
class GetDataDecorator {
  constructor(GetDataToDecorator){
    this.getDataDecor = new GetDataToDecorator;
  }
  getData(url) {
    return this.getDataDecor.getData(url).then(resp => resp.json());
  }
}

export const getDataDecorator = new GetDataDecorator(GetData);
export const getDataProxy = new GetDataProxy(getDataDecorator);