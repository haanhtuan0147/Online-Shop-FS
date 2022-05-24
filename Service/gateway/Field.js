const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const BASE_URL_Product = process.env.Product
const api = apiAdapter(BASE_URL_Product)
module.exports =class Field {
    findAll = async (req, res, next,baseController) => {
        await  api.get('/Field'+req.path).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND FIELD"}, req, res.status(500));
        });
    }
     create = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.post('/Field'+req.path,req.body,{headers: {
            'authorization': req.headers['authorization'],
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse(resxp.data, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT CREATE FIELD"}, req, res.status(500));
        });
    }

     update = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.put('/Field'+req.path,req.body,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse(resxp.data, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT UPDATE FIELD"}, req, res.status(500));
        });
    }
     delete = async (req, res, next,baseController) => {
        await api.delete('/Field'+req.path,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': req.headers['authorization']
          }}).then((resxp) => {
            baseController.sendResponse(resxp.data, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT DELETE FIELD"}, req, res.status(500));
        });
    }


     findOne = async (req, res, next,baseController) => {
        await api.get('/Field'+req.path,{headers: {
            'Content-Type': 'application/json;charset=utf-8',
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND FIELD"}, req, res.status(500));
        });
    }


     findItem = async (req, res, next,baseController) => {
        if(Object.keys(req.body).length==0)
        return baseController.sendResponse({message : "NOT ITEM"}, req, res.status(500));
        await api.get('/Field'+req.path,{data:req.body,headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND FIELD"}, req, res.status(500));
        });
    }

    findcategory= async (req, res, next,baseController) => {
        await api.get('/Field'+req.path,{headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }}).then((resxp) => {
            baseController.sendResponse({result : resxp.data}, req, res.status(200));
        }).catch((err) => {
            baseController.sendResponse({message : "NOT FIND FIELD"}, req, res.status(500));
        });
    }
   findProduct_field= async (req, res, next,baseController) => {
    await api.get('/Field/findcategory/'+req.params.id,{headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }}).then(async(resxp) => {
            var category=[]
            for(var i=0;i<resxp.data.length;i++)
            {
                category.push(resxp.data[i].id)
            }
            await api.get('/Product/searchbycategory',{data:{"category":category},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }}).then((resxp) => {
                baseController.sendResponse({result : resxp.data}, req, res.status(200));
            }).catch((err) => {
                 baseController.sendResponse({message : "NOT FIND PRODUCT"}, req, res.status(500));
            });
    }).catch((err) => {
        baseController.sendResponse({message : "NOT FIND FIELD"}, req, res.status(500));
   });

   }



}