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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
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
             if(error.response)
          return Promise.reject({status:error.response.status,rs:error.response.data.result})
          else
          return Promise.reject({status:500,rs:"Syntax error"});
        }   
    }
}