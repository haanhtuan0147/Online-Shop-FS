
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Field')
const service = new Service();
module.exports=class Field {

    findAll = (req, res, next) => {
        service.findAll(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse(err, req, res.status(500));
        });
     }

     create =  (req, res, next) => {
        service.create(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse(err, req, res.status(500));
        });
    }

     update =  (req, res, next) => {
        service.update(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse(err, req, res.status(500));
        });
    }

    findOne =  (req, res, next) => {
        service.findOne(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse(err, req, res.status(500));
        });
    }
    findItem =  (req, res, next) => {
        service.findItem(req,baseController).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse(err, req, res.status(500));
        });
    }
    findcategory=  (req, res, next) => {
        service.findcategory(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse(err, req, res.status(500));
        });
    }
    findProduct_field=  (req, res, next) => {
        service.findProduct_field(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse(err, req, res.status(500));
        });
    }
    delete = (req, res, next) => {
        service.delete(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse(err, req, res.status(500));
        });
    }
}