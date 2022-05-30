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
                return Promise.reject({Message:"Not Find Field"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({Message:"Not Find Field"})
        }
        
    }
     create = async (req) => {
         try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({Message:"Not item"})
            const rs=await api.post('/Field'+req.path,req.body,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({Message:"Not create Field"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({Message:"Not create Field"})
         }

    }

     update = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({Message:"Not item"})
            const rs=await api.put('/Field'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({Message:"Not update Field"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({Message:"Not update Field"})
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
                  return Promise.reject({Message:"Not delete Field"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({Message:"Not delete Field"})
         }
    }


     findOne = async (req) => {
        try {
            const rs=await api.get('/Field'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({Message:"Not find Field"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({Message:"Not find Field"})
         }
    }


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({Message:"Not item"})
            const rs=await api.get('/Field'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({Message:"Not find Field"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({Message:"Not find Field"})
         }
    }

    findcategory= async (req) => {
        try {
            const rs= await api.get('/Field'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs.status!=200)
              {
                  return Promise.reject({Message:"Not find findcategory"})
              }
              return Promise.resolve({result : rs.data})      
         } catch (error) {
            return Promise.reject({Message:"Not find findcategory"})
         }
    }
   findProductfield= async (req) => {
    try {
        
        const categoryfollowfield= await api.get('/Field/findcategory/'+req.params.id,{headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }})
          if(categoryfollowfield.status!=200)
          {
              return Promise.reject({Message:"Not find findcategory"})
          }
          var category=[]
          for(var i=0;i<categoryfollowfield.data.length;i++)
          {
              category.push(categoryfollowfield.data[i].id)
          }
          
          const productfollowfied=await api.get('/Product/Products/searchbycategory/'+req.body.page,{data:{"category":category},headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }})
          if(productfollowfied.status!=200)
          {
              return Promise.reject({Message:"Not find findProduct_field"})
          }
          return Promise.resolve({result : productfollowfied.data})      
     } catch (error) {
        return Promise.reject({Message:"Not find findProduct_field"})
     }
    }
    countpagefindProductfield= async (req) => {
        try {
            const categoryfollowfield= await api.get('/Field/findcategory/'+req.params.id,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(categoryfollowfield.status!=200)
              {
                  return Promise.reject({Message:"Not find findcategory"})
              }
              var category=[]
              for(var i=0;i<categoryfollowfield.data.length;i++)
              {
                  category.push(categoryfollowfield.data[i].id)
              }
              const countpage=await api.get('/Product/Products/countpagesearchbycategory',{data:{"category":category},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(countpage.status!=200)
              {
                  return Promise.reject({Message:"Not find findProduct_field"})
              }
              return Promise.resolve(countpage.data)      
         } catch (error) {
            return Promise.reject({Message:"Not find findProduct_field"})
         }
        }
}