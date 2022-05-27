const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const BASE_URL_Order = process.env.Order
const BASE_URL_User = process.env.Identity
const BASE_URL_Product = process.env.Product

const api = apiAdapter(BASE_URL_Order)
const apiUser = apiAdapter(BASE_URL_User)
const apiProduct = apiAdapter(BASE_URL_Product)

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
            var body=req.body
            for(var i=0;i<body.item.length;i++){
                const rs1=await apiProduct.get(`/Product/Product/${body.item[i].productId}`,{headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  }})
                if(rs1.status!=200)
                return Promise.reject({message : "NOT CREATE Shopping_Cart"})
                body.item[i].Money=rs1.data[0].Money
            }
            //console.log(req.headers['authorization'])
            const rs=  await api.post('/Shopping_Cart'+req.path,body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
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
    CheckProduct= async (req) => {
        try {
            const item=req.body.item
            var items=[]
            item.forEach((it)=>{
                items.push(it.productId)
            })
            //console.log(items)
            const rs= await apiProduct.post('/Product/CheckProduct',{data:{"item":items},headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "CheckProduct fail"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "CheckProduct fail"})
        }  
    }
    CheckUserReally= async (req) => {
        try {
            const rs= await apiUser.get(`/User/findUser`,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }})
            if(rs.status!=200)
            {
                return Promise.reject({message : "CheckUserReally fail"})
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "CheckUserReally fail"})
        }  
    }

}