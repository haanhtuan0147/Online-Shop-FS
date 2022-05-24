const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const BASE_URL_Product = process.env.Product
const api = apiAdapter(BASE_URL_Product)
module.exports =class Product_Category {
    findAll = async (req, res, next,baseController) => {
        await  api.get('/Product_Category'+req.path).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Product_Category"}, req, res.status(500));
        });
    }
     create = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.post('/Product_Category'+req.path,req.body,{headers: {
            'authorization': req.headers['authorization'],
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse(resxp.data, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT CREATE Product_Category"}, req, res.status(500));
        });
    }

     update = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.put('/Product_Category'+req.path,req.body,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse(resxp.data, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT UPDATE Product_Category"}, req, res.status(500));
        });
    }
     delete = async (req, res, next,baseController) => {
        await api.delete('/Product_Category'+req.path,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse(resxp.data, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT DELETE Product_Category"}, req, res.status(500));
        });
    }


     findOne = async (req, res, next,baseController) => {
        await api.get('/Product_Category'+req.path,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Product_Category"}, req, res.status(500));
        });
    }


     findItem = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.get('/Product_Category'+req.path,{data:req.body,headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Product_Category"}, req, res.status(500));
        });
    }
    findProduct_category = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.get('/Product/searchbycategory',{data:req.body,headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Product"}, req, res.status(500));
        });
    }

}