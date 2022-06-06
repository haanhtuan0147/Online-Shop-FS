const dotenv=require('dotenv')
dotenv.config()
const apiAdapter = require('./axioserver')
const api = apiAdapter(process.env.Product)
module.exports =class Product_Reviews {
    findAll = async (req) => {
        try {
            const rs= await  api.get('/Product_Reviews'+req.path);
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"});
        }
    }
     create = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"});
            const rs=  await api.post('/Product_Reviews'+req.path,req.body,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT CREATE Product_Reviews"});
        }
    }
    CheckProduct= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT input productId"});
            const rs=  await api.get('/Product/Product/'+req.body.productId,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product"});
        }
    }

     update = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"});
            const rs=  await api.put('/Product_Reviews'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT UPDATE Product_Reviews"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT UPDATE Product_Reviews"});
        }
    }
     delete = async (req) => {
        try {
            const rs=  await api.delete('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT DELETE Product_Reviews"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT DELETE Product_Reviews"});
        }
    }


     findOne = async (req) => {
        try {
            const rs= await api.get('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"});
        }
    }


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"});
            const rs= await api.get('/Product_Reviews'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"});
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"});
        }
    }
    findimagereview= async (req) => {
        try {
            const rs= await api.get('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"});
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"});
        }
    }
    createimagereview= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"});
            const rs= await api.post('/Product_Reviews'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"});
        }
    }
    findimagereviewProduct= async (req) => {
        try {
            const Product_Reviewsfollowproduct= await api.get('/Product_Reviews/findItem',{data:{"productId":req.params.id},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(Product_Reviewsfollowproduct.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"});
            }
            var ListItem=[]
            Product_Reviewsfollowproduct.data.forEach((item)=>{
                ListItem.push(item.id);
            })
            //console.log(ListItem)
            const listimagerivew=await api.get('/Product_Reviews/findimagereview_Product',{data:{"ListReviewProduct":ListItem},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
              if(listimagerivew.status!=200)
              {
                  return Promise.reject({message : "NOT FIND Product_Reviews"});
              }
            return Promise.resolve({result : listimagerivew.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"});
        }
    }
    findAVGNumberStarProductTop10= async (req) => {
        try {
            //tìm 10 Product_Reviews 
            const top10Product_Reviews= await api.get('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
              //console.log(rs.data)
            if(top10Product_Reviews.status!=200)
            {
                return Promise.reject({message : "NOT FIND Product_Reviews"});
            }
            var productIds=[];
            //lấy ra các id productIds
            top10Product_Reviews.data.forEach((it)=>{
                productIds.push(it.productId);
            })
            //console.log(productIds)
            //tìm các product trong danh sách 
            var ProductfollowProduct_Reviews=await api.get('/Product/Products/findArrayProduct',{data:{"item":productIds},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
              if(ProductfollowProduct_Reviews.status!=200)
              {
                  return Promise.reject({message : "NOT FIND Product_Reviews"});
              }
            //lọc và thêm điểm vào các product
            for(var i=0;i<ProductfollowProduct_Reviews.data.length;i++)
            {
                top10Product_Reviews.data.forEach((it)=>{
                    if(it.productId==ProductfollowProduct_Reviews.data[i].id)
                    ProductfollowProduct_Reviews.data[i].NumberStar=it.NumberStar;
                    //console.log(rs1.data[i].NumberStar=it.NumberStar)
                })
            }
            //console.log(rs1.data)
            return Promise.resolve({result : ProductfollowProduct_Reviews.data});
        } catch (error) {
            return Promise.reject({message : "NOT FIND Product_Reviews"});
        }
    }

}