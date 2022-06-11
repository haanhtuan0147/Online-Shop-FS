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
                return Promise.reject({status:rs.status,rs : rs.data.result})
             }
             return Promise.resolve({status:rs.status,rs : rs.data.result})
         } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
         }
    }
     create = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.post('/Product_Category'+req.path,req.body,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                return Promise.reject({status:rs.status,rs : rs.data.result})
            }
              return Promise.resolve({status:rs.status,rs : rs.data.result})
            } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
         }
    }

     update = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.put('/Product_Category'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
              if(rs.status!=200)
              {
                return Promise.reject({status:rs.status,rs : rs.data.result})
              }
              return Promise.resolve({status:rs.status,rs : rs.data.result})
         } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
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
                return Promise.reject({status:rs.status,rs : rs.data.result})
              }
              return Promise.resolve({status:rs.status,rs : rs.data.result})
         } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
         }
    }


     findOne = async (req) => {
        try {
            const rs= await api.get('/Product_Category'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
              }})
              if(rs.status!=200)
              {
                return Promise.reject({status:rs.status,rs : rs.data.result})
              }
              return Promise.resolve({status:rs.status,rs : rs.data.result})
         } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
         }
    }


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.get('/Product_Category'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                return Promise.reject({status:rs.status,rs : rs.data.result})
              }
              return Promise.resolve({status:rs.status,rs : rs.data.result})
         } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
         }
    }
    findProductcategory = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.get('/Product/Product/searchbycategory/'+req.params.page,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                return Promise.reject({status:rs.status,rs : rs.data.result})
              }
              return Promise.resolve({status:rs.status,rs : rs.data.result})
         } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
         }
    }
    countpagefindProductcategory = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.get('/Product/Product/countpagesearchbycategory/',{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                return Promise.reject({status:rs.status,rs : rs.data.result})
              }
              return Promise.resolve({status:rs.status,rs : rs.data.result})
         } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
         }
    }

}