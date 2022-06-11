const {v4} = require('uuid');
const BaseController =require('./BaseController');
const baseController = new BaseController();
const Service=require('../Service/User')
const service = new Service();
module.exports=class User {

    findAll = (req, res, next) => {
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.findAll(token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
}

    findOne =  (req, res, next) => {
        const id = req.params.id;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.findOne(id,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
    findItem =  (req, res, next) => {
        const item = req.body;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        console.log(item)
        service.findItem(item,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    findUser= (req, res, next) => {
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.findUser(token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    createUser=(req, res, next) => {
        const item = req.body;
        item.Id = v4();
        item.AccountRights="User"
        delete item.numberCheck
        service.create(item)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res);});
    }
    createAdmin=(req, res, next) => {
        const item = req.body;
        item.Id = v4();
        item.AccountRights="Admin"
        delete item.numberCheck
        service.create(item)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res);});
    }
    updateUser=(req, res, next) => {
        const id=req.params.id
        const item = req.body;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.updateAccountRights(id,item,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res);});
    }
    deleteUser=(req, res, next) => {
        const id = req.params.id;
        service.deleteUser(id)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res);});
    }
    CheckEmail=(req, res, next) => {
        const item = req.body;
        service.CheckEmail(item.Email)
        .then(()=>{next()})
        .catch(err => { baseController.sendResponse(err, req, res);});
    }
}