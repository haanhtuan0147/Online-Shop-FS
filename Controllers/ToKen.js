const {v4} = require('uuid');
const BaseController =require('./BaseController');
const baseController = new BaseController();
const Service=require('../Service/ToKen')
const service = new Service();
module.exports=class ToKen {

    findAll = (req, res, next) => {

        service.findAll()
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });
}

     create =  (req, res, next) => {
        const item = req.body;
        item.Id = v4();
        service.create(item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });
    }

     update =  (req, res, next) => {
        const item = req.body;
        const id = req.params.id;
        service.update(id, item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });
    }

    findOne =  (req, res, next) => {
        const id = req.params.id;
        service.findOne(id)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });
    }
    findItem =  (req, res, next) => {
        const item = req.body;
        service.findItem(item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }

    delete = (req, res, next) => {
        const id = req.params.id;
        service.delete(id)
            .then(result => {
                baseController.sendResponse(result, req, res.status(200));
            })
            .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    CreateToken=(req, res, next) => {
        const Email = req.user;
        service.CreateToken(Email)
            .then(result => {
                baseController.sendResponse(result, req, res.status(200));
            })
            .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    CheckToKenTime=(req, res, next) => {
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.CheckToKenTime(token)
            .then(result => {
                next()
                        })
            .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    RoleRoot = (req,res,next) => {
        console.log("123")
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.RoleRoot(token)
            .then(() => {
                next();
            })
            .catch((err) => {
                res.status(500).json(err)
            })
        }
    RoleAdmin = (req,res,next) => {
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.RoleAdmin(token)
            .then(() => {
                    next();
            })
            .catch((err) => {
                    res.status(500).json(err)
            })
    }
    RoleUser = (req,res,next) => {
        console.log("123")
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        console.log(req.headers['authorization'])
        service.RoleUser(token)
        .then(() => {
                next();
            })
        .catch((err) => {
                        res.status(500).json(err)
        })
    }
}