
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Shopping_Cart')
const service = new Service();
module.exports=class Shopping_Cart {

    findAll = (req, res, next) => {
        service.findAll(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
     }

     create =  (req, res, next) => {
        service.create(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    findOne =  (req, res, next) => {
        service.findOne(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    findItem =  (req, res, next) => {
        service.findItem(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    findShoppingcarttotalmoney=  (req, res, next) => {
        service.findShoppingcart_totalmoney(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    findShoppingcarttotalmoneydetail=  (req, res, next) => {
        service.findShoppingcarttotalmoneydetail(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    CancelConfirmTransportSuccess=  (req, res, next) => {
        service.CancelConfirmTransportSuccess(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    CheckUserReally=  (req, res, next) => {
        service.CheckUserReally(req).then((result) => {
            next()
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    CheckProduct=  (req, res, next) => {
        service.CheckProduct(req).then((result) => {
            next()
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
}