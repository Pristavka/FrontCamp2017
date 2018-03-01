export default class Controller {
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
    let blog = {};
    blog.author = req.body.author;
    blog.text = req.body.text;
    return this.facade.update({_id: req.params.id}, blog);
  }

  remove(req, res, next) {
    return this.facade.remove({_id: req.params.id});
  }
}
