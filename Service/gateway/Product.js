const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const api = apiAdapter(process.env.Product)
module.exports =class Product {
    findAll = async (req) => {
        try {
            const rs= await  api.get('/Product'+req.path,{data:req.body,headers: {'Content-Type': 'application/json;charset=utf-8'}});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result})  ;         
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }
    }
    pagecountfindAll = async (req) => {
        try {
            const rs= await  api.get('/Product'+req.path);
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result})  ;         
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }
    }
     create = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM"});
            const rs=  await api.post('/Product'+req.path,req.body,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;          
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }
    }
    checkArrayCategory=async(req)=>{
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM"});
            const rs=  await api.get('/Product_Category/checkArrayCategory'+req.path,{data:{"category":JSON.parse(req.body.categoryId)},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result});           
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }
    }
     update = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM"});
            const rs=  await api.put('/Product'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;          
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }
    }
     delete = async (req) => {
        try {
            const rs=  await api.delete('/Product'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result});          
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }
    }


     findOne = async (req) => {
        try {
            const rs=  await api.get('/Product'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result});           
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }
    }


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM"});
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }
    }
    pagecountfindItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM"});
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }
    }
    searchbyprice=async (req) => {     
        try {
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }   
    }
    pagecountsearchbyprice=async (req) => {     
        try {
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }   
    }
    searchbypriceBetween= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM"});
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }   
    }
    pagecountsearchbypriceBetween= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM"});
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }   
    }
    searchbyname= async (req) => {
        try {
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }   
    }
    
    pagecountsearchbyname= async (req) => {
        try {
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }   
    }
    findAVGNumberStarProduct= async (req) => {
        try {
            const rs=  await api.get('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }   
    }
    countpagefindDetailsProduct= async (req) => {
        try {
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }   
    }
    findDetailsProduct= async (req) => {
        try {
            const rs=  await api.get('/Product'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }   
    }
}