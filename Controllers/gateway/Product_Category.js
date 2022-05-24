
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Product_Category')
const service = new Service();
module.exports=class Product_Category {

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
    findProduct_category= (req, res, next) => {
        service.findProduct_category(req, res, next,baseController)
    }
}