
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Field')
const service = new Service();
module.exports=class Field {

    findAll = (req, res, next) => {
        service.findAll(req, res, next,baseController)
     }

     create =  (req, res, next) => {
        service.create(req, res, next,baseController)
    }

     update =  (req, res, next) => {
        service.update(req, res, next,baseController)
    }

    findOne =  (req, res, next) => {
        service.findOne(req, res, next,baseController)
    }
    findItem =  (req, res, next) => {
        service.findItem(req, res, next,baseController)
    }
    findcategory=  (req, res, next) => {
        service.findcategory(req, res, next,baseController)
    }
    findProduct_field=  (req, res, next) => {
        service.findProduct_field(req, res, next,baseController)
    }
    delete = (req, res, next) => {
        service.delete(req, res, next,baseController)
    }
}