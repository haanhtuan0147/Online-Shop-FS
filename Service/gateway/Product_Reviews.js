const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const api = apiAdapter(process.env.Product)
module.exports =class Product_Reviews {
    findAll = async (req) => {
        try {
            const rs= await  api.get('/Product_Reviews'+req.path)
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"})
        }
    }
     create = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs=  await api.post('/Product_Reviews'+req.path,req.body,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT CREATE Product_Reviews"})
        }
    }

     update = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs=  await api.put('/Product_Reviews'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT UPDATE Product_Reviews"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT UPDATE Product_Reviews"})
        }
    }
     delete = async (req) => {
        try {
            const rs=  await api.delete('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT DELETE Product_Reviews"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT DELETE Product_Reviews"})
        }
    }


     findOne = async (req) => {
        try {
            const rs= await api.get('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"})
        }
    }


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.get('/Product_Reviews'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"})
        }
    }
    findimagereview= async (req) => {
        try {
            const rs= await api.get('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"})
        }
    }
    createimagereview= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"})
            const rs= await api.post('/Product_Reviews'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"})
        }
    }
    findimagereview_Product= async (req) => {
        try {
            const rs= await api.get('/Product_Reviews/findItem',{data:{"productId":req.params.id},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"})
            }
            var ListItem=[]
            rs.data.forEach((item)=>{
                ListItem.push(item.id)
            })
            console.log(ListItem)
            const rs1=await api.get('/Product_Reviews/findimagereview_Product',{data:{"ListReviewProduct":ListItem},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }})
              if(rs1.status!=200)
              {
                  return Promise.reject({message : "NOT FIND Product_Reviews"})
              }
            return Promise.resolve({result : rs1.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"})
        }
    }

}