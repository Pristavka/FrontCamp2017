class GetData{
  getData(url){
    return fetch(url, { mode: 'cors' });
  }
}
/*Decorator pattern*/
class GetDataDecorator {
  constructor(GetData){
    this.getDataDecor = new GetData;
  }
  getData(url) {
    return this.getDataDecor.getData(url).then(resp => resp.json());
  }
}

const getDataDecorator = new GetDataDecorator(GetData);
export default getDataDecorator;