
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Shopping_Cart')
const service = new Service();
module.exports=class Shopping_Cart {

    findAll = (req, res, next) => {
        service.findAll(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
     }

     create =  (req, res, next) => {
        service.create(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    findOne =  (req, res, next) => {
        service.findOne(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    findItem =  (req, res, next) => {
        service.findItem(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    findShoppingcarttotalmoney=  (req, res, next) => {
        service.findShoppingcart_totalmoney(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    findShoppingcarttotalmoneydetail=  (req, res, next) => {
        service.findShoppingcarttotalmoneydetail(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    CancelConfirmTransportSuccess=  (req, res, next) => {
        service.CancelConfirmTransportSuccess(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    CheckUserReally=  (req, res, next) => {
        service.CheckUserReally(req).then((result) => {
            next()
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    CheckProduct=  (req, res, next) => {
        service.CheckProduct(req).then((result) => {
            next()
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
}