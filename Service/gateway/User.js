const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const BASE_URL_Product = process.env.Identity
const api = apiAdapter(BASE_URL_Product)
module.exports =class User {
    findAll = async (req) => {
        try {
            const rs= await  api.get('/User'+req.path,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND User"})
        }  
    }
     create = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.post('/User'+req.path,req.body,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT CREATE User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT CREATE User"})
        }  
    }

     update = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.put('/User'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT UPDATE User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT UPDATE User"})
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
                return Promise.reject({message : "NOT DELETE User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT DELETE User"})
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
                return Promise.reject({message : "NOT FIND User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND User"})
        } 
    }


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.get('/User'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND User"})
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
                return Promise.reject({message : "NOT FIND User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND User"})
        } 
    }
    RegisterToken= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.post('/User'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT RegisterToken User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT RegisterToken User"})
        } 
    }
    RegisterUser= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.post('/User'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT RegisterUser User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT RegisterUser User"})
        } 
    }
    RegisterAdmin= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs=  await api.post('/User'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT RegisterUser User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT RegisterUser User"})
        } 
    }
    Login= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.post('/User'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT Login User"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT Login User"})
        } 
    }

}