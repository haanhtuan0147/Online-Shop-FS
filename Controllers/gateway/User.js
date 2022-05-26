
const BaseController =require('../BaseController');
const baseController = new BaseController();
const Service=require('../../Service/gateway/User')
const service = new Service();
module.exports=class User {

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
    delete=  (req, res, next) => {
        service.delete(req).then((result) => {
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
    findUser=  (req, res, next) => {
        service.findUser(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    RegisterToken=  (req, res, next) => {
        service.RegisterToken(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    RegisterUser=  (req, res, next) => {
        service.RegisterUser(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    RegisterAdmin=  (req, res, next) => {
        service.RegisterAdmin(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
    Login=  (req, res, next) => {
        service.Login(req).then((result) => {
            baseController.sendResponse(result, req, res.status(200));
        }).catch((err) => {
             baseController.sendResponse({message : err}, req, res.status(500));
        });
    }
}