const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const BASE_URL_Order = process.env.Order
const BASE_URL_User = process.env.Identity
const api = apiAdapter(BASE_URL_Order)
const apiUser = apiAdapter(BASE_URL_User)
module.exports =class Shopping_Cart {
    findAll = async (req) => {
        try {
            const rs=  await  api.get('/Shopping_Cart'+req.path,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Shopping_Cart"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Shopping_Cart"})
        }   
    }
     create = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs=  await api.post('/Shopping_Cart'+req.path,req.body,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT CREATE Shopping_Cart"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT CREATE Shopping_Cart"})
        }   
    }
     findOne = async (req) => {
        try {
            const rs=  await api.get('/Shopping_Cart'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Shopping_Cart"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Shopping_Cart"})
        }  
    }


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.get('/Shopping_Cart'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Shopping_Cart"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Shopping_Cart"})
        }  
    }
    findShoppingcart_totalmoney= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.get('/Shopping_Cart'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Shopping_Cart"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Shopping_Cart"})
        }  
  
    }
    findShoppingcart_totalmoney_detail= async (req) => {
        try {
            const rs= await api.get('/Shopping_Cart'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
                      }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Shopping_Cart"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Shopping_Cart"})
        }  
    }
    Cancel_Confirm_Transport_Success= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.put('/Shopping_Cart'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT Change status Shopping_Cart"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT Change status Shopping_Cart"})
        }  
    }
    CheckUserReally= async (req) => {
        try {
            const rs= await apiUser.post('/User/CheckUserReally',req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "Shopping_Cart exist"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "Shopping_Cart exist"})
        }  
    }

}