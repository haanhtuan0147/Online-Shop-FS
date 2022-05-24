
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Product')
const service = new Service();
module.exports=class Product {

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
    searchbyname =  (req, res, next) => {
        service.searchbyname(req, res, next,baseController)
    }
    searchbyprice =  (req, res, next) => {
        service.searchbyprice(req, res, next,baseController)
    }
    searchbypriceBetween =  (req, res, next) => {
        service.searchbypriceBetween(req, res, next,baseController)
    }
}