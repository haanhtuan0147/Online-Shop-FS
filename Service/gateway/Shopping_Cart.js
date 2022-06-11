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
            var body=req.body;
            var Quantity=[];
            //lọc sản phẩm 
            for(var i=0;i<body.item.length;i++){
                const productone=await apiProduct.get(`/Product/${body.item[i].productId}`,{headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  }});
                if(productone.status!=200)
                return Promise.reject({status:406,rs: "NOT CREATE Shopping_Cart"});
                var Quantityater=Number(productone.data.result[0].Quantity)-Number(body.item[i].numberProduct);
                if(Quantityater<0)
                return Promise.reject({status:406,rs:"Quantiy product insufficient "+body.item[i].productId+Quantityater+"Number product"});
                Quantity.push({id:productone.data.result[0].id,Quantity:Quantityater});
                body.item[i].Money=productone.data.result[0].Money;
            }
            //console.log("loc sản phẩm")
            //console.log(req.headers['authorization'])
            //thêm vào shopping cart
            const insertshopiingcar=  await api.post('/Shopping_Cart'+req.path,body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(insertshopiingcar.status!=200)
            {
                return Promise.reject({status:406,rs: "NOT CREATE Shopping_Cart"});
            }
            //console.log("thêm vào shopping cart")
            //thay đổi lại số lượng sản phẩm
            const QuantityProduct=await apiProduct.put('/Product/Product/UpdateQuantityArrayProduct',Quantity,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            //console.log("thay đổi lại số lượng sản phẩm")
            if(QuantityProduct.status!=200)
            return Promise.reject({status:406,rs:"NOT Update Quantity product"});
            return Promise.resolve({status:rs.status,rs:insertshopiingcar.data.result});
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
        }   
    }
     findOne = async (req) => {
        try {
            const rs=  await api.get('/Shopping_Cart'+req.path,{headers: {
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


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.get('/Shopping_Cart'+req.path,{data:req.body,headers: {
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
    findShoppingcarttotalmoney= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            const rs= await api.get('/Shopping_Cart'+req.path,{data:req.body,headers: {
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
    findShoppingcarttotalmoneydetail= async (req) => {
        try {
            const rs= await api.get('/Shopping_Cart'+req.path,{headers: {
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
    CancelConfirmTransportSuccess= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({status:406,rs:"NOT ITEM body"})
            //console.log("bắt đầu thay đổi trạng thái")
            const rs= await api.put('/Shopping_Cart'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
             // console.log("thay đổi trạng thái")
            if(rs.status!=200)
            {
                return Promise.reject({status:406,rs:"NOT Change status Shopping_Cart"});
            }
            if(req.body.Status=="Cancel"){
                //console.log("trạng thái là cancel")
                const orderfollowshoppingcart=await api.get('/Shopping_Cart/Shopping_Cart/findShoppingcart_totalmoney_detail/'+req.params.id,{headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'authorization': req.headers['authorization']
                  }})
                  //console.log("danh sách shopping cart chi tiết")
                var Quantity=[];
                for(var i=0;i<orderfollowshoppingcart.data.result.length;i++){
                    const productone=await apiProduct.get(`/Product/${orderfollowshoppingcart.data.result[i].productId}`,{headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                      }});
                    if(productone.status!=200)
                    return Promise.reject({status:406,rs:"NOT CREATE Shopping_Cart"});
                    var Quantityater=Number(productone.data.result[0].Quantity)+Number(orderfollowshoppingcart.data.result[i].numberProduct);
                    //console.log(Quantityater)
                    Quantity.push({id:orderfollowshoppingcart.data.result[i].productId,Quantity:Quantityater})
                }
                //console.log("qua vòng lọc danh sách")
                const QuantityProduct=await apiProduct.put('/Product/Product/UpdateQuantityArrayProduct',Quantity,{headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'authorization': req.headers['authorization']
                  }});
                //console.log("qua vòng thay đổi số lượng")
                if(QuantityProduct.status!=200)
                return Promise.reject({status:406,rs:"NOT Update Quantity product"});
            }
            //console.log("hoàn thành thay đổi")
            return Promise.resolve({status:rs.status,rs : rs.data.result})
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data})
        }  
    }
    CheckProduct= async (req) => {
        try {
            const item=req.body.item;
            var items=[];
            item.forEach((it)=>{
                items.push(it.productId);
            })
            //console.log(items)
            const rs= await apiProduct.post('/Product/Product/CheckProduct',{data:{"item":items},headers: {
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
    CheckUserReally= async (req) => {
        try {
            const rs= await apiUser.get(`/User/User/findUser`,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({status:rs.status,rs : rs.data.result})
            }
            if(rs.data.result==[])
            {
                return Promise.reject({status:406,rs:"CheckUserReally fail"});
            }
            return Promise.resolve({status:rs.status,rs:rs.data.result}) ;   
        } catch (error) {
            return Promise.reject({status:error.response.status,rs:error.response.data});
        }  
    }

}