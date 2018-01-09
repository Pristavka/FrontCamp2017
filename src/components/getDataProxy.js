import { configs } from '../config/config';
import getDataDecorator from './getDataDecorator';

/*Proxy pattern*/
export default class GetDataProxy{
  getData(url){
    const password = prompt('Enter the Password, please');
    if (password === configs.password) return getDataDecorator.getData(url);
    alert('You don\'t know the Password, get out from your computer!');
    return Promise.reject('Or try once more =)');
  }
}
