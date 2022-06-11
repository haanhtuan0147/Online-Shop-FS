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
            const rs=  await api.post('/Product_Reviews'+req.path,req.body,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result})
            }
            return Promise.resolve({status:rs.status,rs : rs.data.result})
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
        }
    }
    CheckProduct= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs=  await api.get('/Product/Product/'+req.body.productId,{headers: {
                'authorization': req.headers['authorization'],
                'Content-Type': 'application/json;charset=utf-8'
              }});
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
            const rs=  await api.put('/Product_Reviews'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
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
            const rs=  await api.delete('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
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
            const rs= await api.get('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
              }});
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
            const rs= await api.get('/Product_Reviews'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result})
            }
            return Promise.resolve({status:rs.status,rs : rs.data.result})
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
        }
    }
    findimagereview= async (req) => {
        try {
            const rs= await api.get('/Product_Reviews'+req.path,{headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result})
            }
            return Promise.resolve({status:rs.status,rs : rs.data.result})
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
        }
    }
    createimagereview= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.post('/Product_Reviews'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result})
            }
            return Promise.resolve({status:rs.status,rs : rs.data.result})
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
        }
    }
    findimagereviewProduct= async (req) => {
        try {
            const Product_Reviewsfollowproduct= await api.get('/Product_Reviews/Product_Reviews/findItem',{data:{"productId":req.params.id},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
            if(Product_Reviewsfollowproduct.status!=200)
            {
                return Promise.reject({status:406,rs:"NOT FIND Product_Reviews"});
            }
            var ListItem=[]
            Product_Reviewsfollowproduct.data.result.forEach((item)=>{
                ListItem.push(item.id);
            })
            //console.log(ListItem)
            const listimagerivew=await api.get('/Product_Reviews/Product_Reviews/findimagereview_Product',{data:{"ListReviewProduct":ListItem},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
              if(listimagerivew.status!=200)
              {
                  return Promise.reject({status:406,rs:"NOT FIND Product_Reviews"});
              }
              return Promise.resolve({status:listimagerivew.status,rs : listimagerivew.data.result})
            } catch (error) {
                return Promise.reject({status:error.response.status,rs:error.response.data})
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
                return Promise.reject({status:406,rs: "NOT FIND Product_Reviews"});
            }
            var productIds=[];
            //lấy ra các id productIds
            top10Product_Reviews.dataresult.forEach((it)=>{
                productIds.push(it.productId);
            })
            //console.log(productIds)
            //tìm các product trong danh sách 
            var ProductfollowProduct_Reviews=await api.get('/Product/Product/findArrayProduct',{data:{"item":productIds},headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }});
              if(ProductfollowProduct_Reviews.status!=200)
              {
                  return Promise.reject({status:406,rs: "NOT FIND Product_Reviews"});
              }
            //lọc và thêm điểm vào các product
            for(var i=0;i<ProductfollowProduct_Reviews.data.result.length;i++)
            {
                top10Product_Reviews.data.result.forEach((it)=>{
                    if(it.productId==ProductfollowProduct_Reviews.data.result[i].id)
                    ProductfollowProduct_Reviews.data.result[i].NumberStar=it.NumberStar;
                    //console.log(rs1.data[i].NumberStar=it.NumberStar)
                })
            }
            //console.log(rs1.data)
            return Promise.resolve({status:listimagerivew.status,rs:ProductfollowProduct_Reviews.data.result});
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
        }
    }

}