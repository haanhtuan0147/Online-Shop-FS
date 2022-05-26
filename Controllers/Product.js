const {v4} = require('uuid');
const BaseController =require('./BaseController');
const baseController = new BaseController();
const Service=require('../Service/Product')
const service = new Service();
module.exports=class Product {

    findAll = (req, res, next) => {
        var page=req.body.page
        service.findAll(page)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });
    }
    pagecountfindAll = (req, res, next) => {
        service.pagecountfindAll()
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
        console.log(req.body)
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
        var page=req.params.page
        const item = req.body;
        //console.log(req.body)
        service.findItem(item,page)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    countpagefindItem =  (req, res, next) => {
        const item = req.body;
        //console.log(req.body)
        service.countpagefindItem(item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500));});
    }
    searchbyprice=  (req, res, next) => {
        var page=req.params.page
        const price = req.body.price;
        service.searchbyprice(price,page)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    countpagesearchbyprice=  (req, res, next) => {
        const price = req.body.price;
        service.countpagesearchbyprice(price)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    searchbypriceBetween=  (req, res, next) => {
        var page=req.params.page
        const price = req.body;
        service.searchbypriceBetween(price.sart,price.end,page)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    countpagesearchbypriceBetween=  (req, res, next) => {
        const price = req.body;
        service.countpagesearchbypriceBetween(price.sart,price.end)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    searchbyname=  (req, res, next) => {
        var page=req.params.page
        const name = req.body.name;
        service.searchbyname(name,page)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    countpagesearchbyname=  (req, res, next) => {
        const name = req.body.name;
        service.countpagesearchbyname(name)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    searchbycategory=  (req, res, next) => {
        var page=req.params.page
        const category = req.body;
        service.searchbycategory(category.category,page)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    countpagesearchbycategory=  (req, res, next) => {
        const category = req.body;
        service.countpagesearchbycategory(category.category)
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
    CheckProduct=(req, res, next)=>{
        const item=req.body
        service.CheckProduct(item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });
    }
}