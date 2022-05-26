const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const BASE_URL_Product = process.env.Product
const api = apiAdapter(BASE_URL_Product)
module.exports =class Product_Category {
    findAll = async (req) => {
        try {
            const rs= await  api.get('/Product_Category'+req.path)
              if(rs.status!=200)
              {
                  return Promise.reject({message : "NOT Find Product_Category"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({message : "NOT Find Product_Category"})
         }
    }
     create = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.post('/Product_Category'+req.path,req.body,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({message : "NOT CREATE Product_Category"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({message : "NOT CREATE Product_Category"})
         }
    }

     update = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.put('/Product_Category'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({message : "NOT Update Product_Category"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({message : "NOT Update Product_Category"})
         }
    }
     delete = async (req) => {
        try {
            const rs= await api.delete('/Product_Category'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({message : "NOT DELETE Product_Category"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({message : "NOT DELETE Product_Category"})
         }
    }


     findOne = async (req) => {
        try {
            const rs= await api.get('/Product_Category'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({message : "NOT Find Product_Category"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({message : "NOT Find Product_Category"})
         }
    }


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.get('/Product_Category'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({message : "NOT FIND Product_Category"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Category"})
         }
    }
    findProduct_category = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.get('/Product/Product/searchbycategory/'+req.params.page,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({message : "NOT FIND findProduct_category"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({message : "NOT FIND findProduct_category"})
         }
    }
    countpagefindProduct_category = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.get('/Product/Product/countpagesearchbycategory/',{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({message : "NOT FIND findProduct_category"})
              }
              return Promise.resolve(rs.data)      
         } catch (error) {
            return Promise.reject({message : "NOT FIND findProduct_category"})
         }
    }

}