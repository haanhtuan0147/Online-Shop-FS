
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/Product_Reviews')
const service = new Service();
module.exports=class Product_Reviews {

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
    CheckProduct= (req, res, next) => {
        service.CheckProduct(req).then((result) => {
            next()
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
    findimagereview= (req, res, next) => {
        service.findimagereview(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    createimagereview= (req, res, next) => {
        service.createimagereview(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    findimagereviewProduct= (req, res, next) => {
        service.findimagereviewProduct(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    findAVGNumberStarProductTop10= (req, res, next) => {
        service.findAVGNumberStarProductTop10(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
}