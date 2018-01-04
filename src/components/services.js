class GetAllData{
  getData(url){
    return fetch(url, { mode: 'cors' })
  }
}
/*Decorator pattern*/
class Services {
  constructor(GetData){
    this.getAllData = new GetData;
  }
  getData(url) {
    return this.getAllData.getData(url).then(resp => resp.json())
  };
};

const services = new Services(GetAllData);
export default services;