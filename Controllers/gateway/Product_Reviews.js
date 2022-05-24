
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Product_Reviews')
const service = new Service();
module.exports=class Product_Reviews {

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
    delete = (req, res, next) => {
        service.delete(req, res, next,baseController)
    }
    findimagereview= (req, res, next) => {
        service.findimagereview(req, res, next,baseController)
    }
    createimagereview= (req, res, next) => {
        service.createimagereview(req, res, next,baseController)
    }
}