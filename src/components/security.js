import { configs } from '../config/config';
import services from './services';

/*Proxy pattern*/
export default class Security{
  getData(url){
    const password = prompt('Enter the Password, please');
    if (password === configs.password) return services.getData(url);
    alert('You don\'t know the Password, get out from your computer!')
    return Promise.reject('Or try once more =)');
  }
}