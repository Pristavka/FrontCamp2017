module.exports = class Controller{
  constructor(facade) {
    this.facade = facade;
  }

  create(req, res, next) {
    return this.facade.create(req.body);
  }

  find(req, res, next) {
    return this.facade.find({});
  }

  findOne(req, res, next) {
    return this.facade.findOne(req.body);
  }

  findById(req, res, next) {
    return this.facade.findById(req.params.id);
  }

  update(req, res, next) {
    return this.facade.update(req.body);
  }
};
