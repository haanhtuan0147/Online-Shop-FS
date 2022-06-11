const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const BASE_URL_User = process.env.Identity
const BASE_URL_Order = process.env.Order
const api = apiAdapter(BASE_URL_User)
const apiOrder = apiAdapter(BASE_URL_Order)
module.exports =class User {
    findAll = async (req) => {
        try {
            const rs= await  api.get('/User'+req.path,{headers: {
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
     create = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.post('/User'+req.path,req.body,{headers: {
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
            const rs= await api.put('/User'+req.path,req.body,{headers: {
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
            const rs= await api.delete('/User'+req.path,{headers: {
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
            const rs= await api.get('/User'+req.path,{headers: {
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


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.get('/User'+req.path,{data:req.body,headers: {
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
    findUser= async (req) => {
        try {
            const rs= await api.get('/User'+req.path,{headers: {
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
    customerreliability= async (req) => {
        try {
            const rs= await apiOrder.get('/Shopping_Cart'+req.path,{headers: {
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
    RegisterToken= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.post('/User'+req.path,req.body,{headers: {
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
    RegisterUser= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.post('/User'+req.path,req.body,{headers: {
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
    RegisterAdmin= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs=  await api.post('/User'+req.path,req.body,{headers: {
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
    Login= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.post('/User'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
              }})
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result})
            }
            return Promise.resolve({status:rs.status,rs : rs.data.result})
        } catch (error) {
            //console.log(error)
            //return Promise.reject(error.response.data)
            return Promise.reject({status:error.response.status,rs:error.response.data})

        } 
    }

}