
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Product_Reviews')
const service = new Service();
module.exports=class Product_Reviews {

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

     update =  (req, res, next) => {
        service.update(req).then((result) => {
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
    delete = (req, res, next) => {
        service.delete(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    findimagereview= (req, res, next) => {
        service.findimagereview(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    createimagereview= (req, res, next) => {
        service.createimagereview(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    findimagereview_Product= (req, res, next) => {
        service.findimagereview_Product(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
}