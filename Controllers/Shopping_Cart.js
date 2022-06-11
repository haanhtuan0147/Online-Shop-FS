const {v4} = require('uuid');
const BaseController =require('./BaseController');
const baseController = new BaseController();
const Service=require('../Service/Shopping_Cart')
const service = new Service();
const ServiceOrder_Product=require('../Service/Order_Product')
const Order_Product = new ServiceOrder_Product();
module.exports=class Shopping_Cart {

    findAll = (req, res, next) => {
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.findAll(token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }

     create =  (req, res, next) => {
        const item = req.body;
        const date=new Date()
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        item.ShoppingCart.id = v4();
        item.ShoppingCart.Status="Wait"
        item.ShoppingCart.IntendTime=new Date(date.getTime()+(1000*60*60*7)+(1000*60*60*24*7))
        service.create(item.ShoppingCart,token)
        .then(result => {
            Order_Product.createarray(item.ShoppingCart.id,item.item).then(re=>{baseController.sendResponse({ShoppingCart:result,OrderProduct:re}, req, res);}).catch(err => { baseController.sendResponse(err, req, res); });
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
    Cancel=(req, res, next) => {
        service.Cancel(req, res, next,baseController)
    }
    ConfirmTransportSuccess= (req, res, next) => {
        const item = req.body;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        const id = req.params.id;
        service.ConfirmTransportSuccess(id,item,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }

     update =  (req, res, next) => {
        const item = req.body;
        const id = req.params.id;
        service.update(id, item)
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
        service.findItem(item,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    findShoppingcarttotalmoney =  (req, res, next) => {
        const item = req.body;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.findShoppingcarttotalmoney(item,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    findShoppingcarttotalmoneydetail=(req, res, next) => {
        const id = req.params.id;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.findShoppingcarttotalmoneydetail(id,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    customerreliability=(req, res, next) => {
        const id = req.params.userId;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.customerreliability(id,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    delete = (req, res, next) => {
        const id = req.params.id;
        service.delete(id)
            .then(result => {
                baseController.sendResponse(result, req, res);
            })
            .catch(err => { baseController.sendResponse(err, req, res); });

    }
}