const {v4} = require('uuid');
const BaseController =require('./BaseController');
const baseController = new BaseController();
const Service=require('../Service/User')
const service = new Service();
module.exports=class User {

    findAll = (req, res, next) => {

        service.findAll()
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
    findUser= (req, res, next) => {
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.findUser(token)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    createUser=(req, res, next) => {
        const item = req.body;
        item.Id = v4();
        item.AccountRights="User"
        delete item.numberCheck
        service.create(item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500));});
    }
    createAdmin=(req, res, next) => {
        const item = req.body;
        item.Id = v4();
        item.AccountRights="Admin"
        delete item.numberCheck
        service.create(item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500));});
    }
    updateUser=(req, res, next) => {
        const id=req.params.id
        const item = req.body;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.updateAccountRights(id,item,token)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500));});
    }
    deleteUser=(req, res, next) => {
        const id = req.params.id;
        service.deleteUser(id)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500));});
    }
    CheckEmail=(req, res, next) => {
        const item = req.body;
        service.CheckEmail(item.Email)
        .then(()=>{next()})
        .catch(err => { baseController.sendResponse(err, req, res.status(500));});
    }
    CheckUserReally=(req, res, next) => {
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.CheckUserReally(token)
        .then((result)=>{baseController.sendResponse(result, req, res.status(200));})
        .catch(err => { baseController.sendResponse(err, req, res.status(500));});
    }
}