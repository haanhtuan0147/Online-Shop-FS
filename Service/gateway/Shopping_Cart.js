const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const BASE_URL_Order = process.env.Order
const BASE_URL_User = process.env.Identity
const api = apiAdapter(BASE_URL_Order)
const apiUser = apiAdapter(BASE_URL_User)
module.exports =class Shopping_Cart {
    findAll = async (req, res, next,baseController) => {
        await  api.get('/Shopping_Cart'+req.path,{headers: {
            'authorization': req.headers['authorization'],
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Shopping_Cart"}, req, res.status(500));
        });
    }
     create = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.post('/Shopping_Cart'+req.path,req.body,{headers: {
            'authorization': req.headers['authorization'],
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse(resxp.data, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT CREATE Shopping_Cart"}, req, res.status(500));
        });
    }
     findOne = async (req, res, next,baseController) => {
        await api.get('/Shopping_Cart'+req.path,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Shopping_Cart"}, req, res.status(500));
        });
    }


     findItem = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.get('/Shopping_Cart'+req.path,{data:req.body,headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Shopping_Cart"}, req, res.status(500));
        });
    }
    findShoppingcart_totalmoney= async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.get('/Shopping_Cart'+req.path,{data:req.body,headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Shopping_Cart"}, req, res.status(500));
        });
    }
    findShoppingcart_totalmoney_detail= async (req, res, next,baseController) => {
        await api.get('/Shopping_Cart'+req.path,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
                  }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Shopping_Cart"}, req, res.status(500));
        });
    }
    Cancel_Confirm_Transport_Success= async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.put('/Shopping_Cart'+req.path,req.body,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Shopping_Cart"}, req, res.status(500));
        });
    }
    CheckUserReally= async (req, res, next,baseController) => {
        await apiUser.post('/User/CheckUserReally',req.body,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            next()
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND Shopping_Cart"}, req, res.status(500));
        });
    }

}