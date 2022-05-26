const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const api = apiAdapter(process.env.Product)
module.exports =class Product {
    findAll = async (req) => {
        try {
            const rs= await  api.get('/Product'+req.path,{data:req.body,headers: {'Content-Type': 'application/json;charset=utf-8'}})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }
    }
    pagecountfindAll = async (req) => {
        try {
            const rs= await  api.get('/Product'+req.path)
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve(rs.data)
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }
    }
     create = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs=  await api.post('/Product'+req.path,req.body,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT CREATE Product"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT CREATE Product"})
        }
    }

     update = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs=  await api.put('/Product'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT UPDATE Product"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT UPDATE Product"})
        }
    }
     delete = async (req) => {
        try {
            const rs=  await api.delete('/Product'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT DELETE Product"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT DELETE Product"})
        }
    }


     findOne = async (req) => {
        try {
            const rs=  await api.get('/Product'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }
    }


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }
    }
    pagecountfindItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve(rs.data)
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }
    }
    searchbyprice=async (req) => {     
        try {
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }   
    }
    pagecountsearchbyprice=async (req) => {     
        try {
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve(rs.data)
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }   
    }
    searchbypriceBetween= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }   
    }
    pagecountsearchbypriceBetween= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve(rs.data)
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }   
    }
    searchbyname= async (req) => {
        try {
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }   
    }
    
    pagecountsearchbyname= async (req) => {
        try {
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"})
            }
            return Promise.resolve(rs.data)
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"})
        }   
    }
}