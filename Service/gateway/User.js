const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const BASE_URL_Product = process.env.Identity
const api = apiAdapter(BASE_URL_Product)
module.exports =class User {
    findAll = async (req, res, next,baseController) => {
        await  api.get('/User'+req.path,{headers: {
            'authorization': req.headers['authorization'],
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND User"}, req, res.status(500));
        });
    }
     create = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.post('/User'+req.path,req.body,{headers: {
            'authorization': req.headers['authorization'],
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse(resxp.data, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT CREATE User"}, req, res.status(500));
        });
    }

     update = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.put('/User'+req.path,req.body,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse(resxp.data, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT UPDATE User"}, req, res.status(500));
        });
    }
     delete = async (req, res, next,baseController) => {
        await api.delete('/User'+req.path,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse(resxp.data, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT DELETE User"}, req, res.status(500));
        });
    }


     findOne = async (req, res, next,baseController) => {
        await api.get('/User'+req.path,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND User"}, req, res.status(500));
        });
    }


     findItem = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.get('/User'+req.path,{data:req.body,headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND User"}, req, res.status(500));
        });
    }
    findUser= async (req, res, next,baseController) => {
        await api.get('/User'+req.path,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND User"}, req, res.status(500));
        });
    }
    RegisterToken= async (req, res, next,baseController) => {
        await api.post('/User'+req.path,req.body,{headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT RegisterToken User"}, req, res.status(500));
        });
    }
    RegisterUser= async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.post('/User'+req.path,req.body,{headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT RegisterUser User"}, req, res.status(500));
        });
    }
    RegisterAdmin= async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.post('/User'+req.path,req.body,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT RegisterUser User"}, req, res.status(500));
        });
    }
    Login= async (req, res, next,baseController) => {
        await api.post('/User'+req.path,req.body,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT Login User"}, req, res.status(500));
        });
    }

}