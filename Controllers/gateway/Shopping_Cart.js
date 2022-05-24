
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Shopping_Cart')
const service = new Service();
module.exports=class Shopping_Cart {

    findAll = (req, res, next) => {
        service.findAll(req, res, next,baseController)
     }

     create =  (req, res, next) => {
        service.create(req, res, next,baseController)
    }
    findOne =  (req, res, next) => {
        service.findOne(req, res, next,baseController)
    }
    findItem =  (req, res, next) => {
        service.findItem(req, res, next,baseController)
    }
    findShoppingcart_totalmoney=  (req, res, next) => {
        service.findShoppingcart_totalmoney(req, res, next,baseController)
    }
    findShoppingcart_totalmoney_detail=  (req, res, next) => {
        service.findShoppingcart_totalmoney_detail(req, res, next,baseController)
    }
    Cancel_Confirm_Transport_Success=  (req, res, next) => {
        service.Cancel_Confirm_Transport_Success(req, res, next,baseController)
    }
    CheckUserReally=  (req, res, next) => {
        service.CheckUserReally(req, res, next,baseController)
    }
}