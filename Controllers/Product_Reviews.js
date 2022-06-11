const {v4} = require('uuid');
const BaseController =require('./BaseController');
const baseController = new BaseController();
const Service=require('../Service/Product_Reviews')
const service = new Service();
module.exports=class Product_Reviews {

    findAll = (req, res, next) => {

        service.findAll()
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
}

     create =  (req, res, next) => {
        const item = req.body;
        item.id = v4();
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.create(item,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
    createimagereview=  (req, res, next) => {
        const id = req.params.id;
        const image=req.body.Image
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.createimagereview(id,image,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
    checknotreallyProductReiview= (req, res, next) => {
        const item = req.body;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.checknotreallyProductReiview(item,token)
        .then(result => {
            next()
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }

     update =  (req, res, next) => {
        const item = req.body;
        const id = req.params.id;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        service.update(id, item,token)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }

    findOne =  (req, res, next) => {
        const id = req.params.id;
        service.findOne(id)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
    findItem =  (req, res, next) => {
        const item = req.body;
        service.findItem(item)
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
    findAVGNumberStarProductTop10 = (req, res, next) => {
        service.findAVGNumberStarProductTop10()
            .then(result => {
                baseController.sendResponse(result, req, res);
            })
            .catch(err => { baseController.sendResponse(err, req, res); });

    }
    findAVGNumberStarProduct= (req, res, next) => {
        const id=req.params.id
        console.log(id)
        service.findAVGNumberStarProduct(id)
            .then(result => {
                baseController.sendResponse(result, req, res);
            })
            .catch(err => { baseController.sendResponse(err, req, res); });

    }

}