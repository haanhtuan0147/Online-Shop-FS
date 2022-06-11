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
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
    pagecountfindAll = (req, res, next) => {
        service.countpagefindAll()
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }


     create =  (req, res, next) => {
        const item = req.body;
        item.Id = v4();
        service.create(item)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }

     update =  (req, res, next) => {
        const item = req.body;
        console.log(req.body)
        const id = req.params.id;
        service.update(id, item)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
    UpdateQuantity =  (req, res, next) => {
        const item = req.body;
        service.UpdateQuantity(item)
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
        var page=req.params.page
        const item = req.body;
        //console.log(req.body)
        service.findItem(item,page)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    countpagefindItem =  (req, res, next) => {
        const item = req.body;
        console.log(req.body)
        service.countpagefindItem(item)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res);});
    }
    searchbyprice=  (req, res, next) => {
        var page=req.params.page
        const price = req.body.price;
        service.searchbyprice(price,page)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    countpagesearchbyprice=  (req, res, next) => {
        const price = req.body.price;
        console.log(price)
        service.countpagesearchbyprice(price)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    searchbypriceBetween=  (req, res, next) => {
        var page=req.params.page
        const price = req.body;
        service.searchbypriceBetween(price.sart,price.end,page)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    countpagesearchbypriceBetween=  (req, res, next) => {
        const price = req.body;
        console.log(price)
        service.countpagesearchbypriceBetween(price.sart,price.end)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    searchbyname=  (req, res, next) => {
        var page=req.params.page
        const name = req.body.name;
        service.searchbyname(name,page)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    countpagesearchbyname=  (req, res, next) => {
        const name = req.body.name;
        console.log(name)
        service.countpagesearchbyname(name)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    searchbycategory=  (req, res, next) => {
        var page=req.params.page
        const category = req.body;
        service.searchbycategory(category.category,page)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });

    }
    countpagesearchbycategory=  (req, res, next) => {
        const category = req.body;
        console.log("vào đây")
        service.countpagesearchbycategory(category.category)
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
    CheckProduct=(req, res, next)=>{
        const item=req.body
        //console.log(item)
        service.CheckProduct(item)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
    findArrayProduct=(req, res, next)=>{
        const item=req.body.item
        console.log(item)
        service.findArrayProduct(item)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
    findDetailsProduct=(req, res, next)=>{
        const item=req.body
        const page=req.params.page
        service.findDetailsProduct(page,item)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
    countpagefindDetailsProduct=(req, res, next)=>{
        const item=req.body
        service.countpagefindDetailsProduct(item)
        .then(result => {
            baseController.sendResponse(result, req, res);
        })
        .catch(err => { baseController.sendResponse(err, req, res); });
    }
}