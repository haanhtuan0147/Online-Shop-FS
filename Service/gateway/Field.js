const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const BASE_URL_Product = process.env.Product
const api = apiAdapter(BASE_URL_Product)
module.exports =class Field {
    findAll = async (req) => {
        try {
            const rs= await  api.get('/Field'+req.path)
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
            return Promise.reject({status:406,rs:"Not item body"})
            const rs=await api.post('/Field'+req.path,req.body,{headers: {
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
            return Promise.reject({status:406,rs :"Not item body"})
            const rs=await api.put('/Field'+req.path,req.body,{headers: {
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
            const rs= await api.delete('/Field'+req.path,{headers: {
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
            const rs=await api.get('/Field'+req.path,{headers: {
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
            return Promise.reject({status:406,rs :"Not item"})
            const rs=await api.get('/Field'+req.path,{data:req.body,headers: {
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

    findcategory= async (req) => {
        try {
            const rs= await api.get('/Field'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                return Promise.reject({status:rs.status,rs : rs.data.result})
              }
              return Promise.resolve({status:rs.status,rs:rs.data.result})           
         } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
         }
    }
   findProductfield= async (req) => {
    try {
        
        const categoryfollowfield= await api.get('/Field/Field/findcategory/'+req.params.id,{headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }})
          if(categoryfollowfield.status!=200)
          {
            return Promise.reject({status:rs.status,rs:"not Find category"})           
          }
          var category=[]
          for(var i=0;i<categoryfollowfield.data.result.length;i++)
          {
              category.push(categoryfollowfield.data.result[i].id)
          }
          
          const productfollowfied=await api.get('/Product/Product/searchbycategory/'+req.body.page,{data:{"category":category},headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }})
          if(productfollowfied.status!=200)
          {
            return Promise.reject({status:productfollowfied.status,rs:"Not find findProduct_field"})
          }
          return Promise.resolve({status:rs.status,rs:productfollowfied.data.result})               
     } catch (error) {
        return Promise.reject({status:error.response.status,rs:error.response.data})
    }
    }
    countpagefindProductfield= async (req) => {
        try {
            const categoryfollowfield= await api.get('/Field/Field/findcategory/'+req.params.id,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(categoryfollowfield.status!=200)
              {
                return Promise.reject({status:rs.status,rs:"not Find category"})           
              }
              var category=[]
              for(var i=0;i<categoryfollowfield.data.result.length;i++)
              {
                  category.push(categoryfollowfield.data.result[i].id)
              }
              const countpage=await api.get('/Product/Product/countpagesearchbycategory',{data:{"category":category},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(countpage.status!=200)
              {
                return Promise.reject({status:productfollowfied.status,rs:"Not find findProduct_field"})
            }
            return Promise.resolve({status:rs.status,rs:{page:countpage.data}})                 
         } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
        }
        }
}