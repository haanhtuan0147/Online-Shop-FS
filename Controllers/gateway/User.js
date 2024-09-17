
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/User')
const service = new Service();
module.exports=class User {

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
    delete=  (req, res, next) => {
        service.delete(req).then((result) => {
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
    findUser=  (req, res, next) => {
        service.findUser(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    customerreliability=  (req, res, next) => {
        service.customerreliability(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    RegisterToken=  (req, res, next) => {
        service.RegisterToken(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    RegisterUser=  (req, res, next) => {
        service.RegisterUser(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    RegisterAdmin=  (req, res, next) => {
        service.RegisterAdmin(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
    Login=  (req, res, next) => {
        service.Login(req).then((result) => {
            baseController.sendResponse(result, req, res);
        }).catch((err) => {
             baseController.sendResponse(err, req, res);
        });
    }
}