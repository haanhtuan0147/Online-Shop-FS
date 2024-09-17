
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Product_Category')
const service = new Service();
module.exports=class Product_Category {

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

     update =  (req, res, next) => {
        service.update(req).then((result) => {
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
    delete = (req, res, next) => {
        service.delete(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    findProductcategory= (req, res, next) => {
        service.findProductcategory(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    countpagefindProductcategory= (req, res, next) => {
        service.countpagefindProductcategory(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
}