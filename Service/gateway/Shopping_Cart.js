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
            return Promise.reject({message : "NOT ITEM"});
            var body=req.body;
            var Quantity=[];
            //lọc sản phẩm 
            for(var i=0;i<body.item.length;i++){
                const productone=await apiProduct.get(`/Product/Product/${body.item[i].productId}`,{headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  }});
                if(productone.status!=200)
                return Promise.reject({message : "NOT CREATE Shopping_Cart"});
                var Quantityater=Number(productone.data[0].Quantity)-Number(body.item[i].numberProduct);
                if(Quantityater<0)
                return Promise.reject({message : "Quantiy product insufficient "+body.item[i].productId+Quantityater+"Number product"});
                Quantity.push({id:productone.data[0].id,Quantity:Quantityater});
                body.item[i].Money=productone.data[0].Money;
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
                return Promise.reject({message : "NOT CREATE Shopping_Cart"});
            }
            //console.log("thêm vào shopping cart")
            //thay đổi lại số lượng sản phẩm
            const QuantityProduct=await apiProduct.put('/Product/UpdateQuantityArrayProduct',Quantity,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            //console.log("thay đổi lại số lượng sản phẩm")
            if(QuantityProduct.status!=200)
            return Promise.reject({message : "NOT Update Quantity product"});
            return Promise.resolve({result : insertshopiingcar.data});
        } catch (error) {
            return Promise.reject({message : "NOT CREATE Shopping_Cart"});
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
                return Promise.reject({message : "NOT FIND Shopping_Cart"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT FIND Shopping_Cart"});
        }  
    }


     findItem = async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"});
            const rs= await api.get('/Shopping_Cart'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Shopping_Cart"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT FIND Shopping_Cart"});
        }  
    }
    findShoppingcarttotalmoney= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"});
            const rs= await api.get('/Shopping_Cart'+req.path,{data:req.body,headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT FIND Shopping_Cart"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT FIND Shopping_Cart"});
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
                return Promise.reject({message : "NOT FIND Shopping_Cart"});
            }
            return Promise.resolve({result : rs.data})
        } catch (error) {
            return Promise.reject({message : "NOT FIND Shopping_Cart"});
        }  
    }
    CancelConfirmTransportSuccess= async (req) => {
        try {
            if(Object.keys(req.body).length==0)
            return Promise.reject({message : "NOT ITEM"});
            //console.log("bắt đầu thay đổi trạng thái")
            const rs= await api.put('/Shopping_Cart'+req.path,req.body,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
             // console.log("thay đổi trạng thái")
            if(rs.status!=200)
            {
                return Promise.reject({message : "NOT Change status Shopping_Cart"});
            }
            if(req.body.Status=="Cancel"){
                //console.log("trạng thái là cancel")
                const orderfollowshoppingcart=await api.get('/Shopping_Cart/findShoppingcart_totalmoney_detail/'+req.params.id,{headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'authorization': req.headers['authorization']
                  }})
                  //console.log("danh sách shopping cart chi tiết")
                var Quantity=[];
                for(var i=0;i<orderfollowshoppingcart.data.length;i++){
                    const productone=await apiProduct.get(`/Product/Product/${orderfollowshoppingcart.data[i].productId}`,{headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                      }});
                    if(productone.status!=200)
                    return Promise.reject({message : "NOT CREATE Shopping_Cart"});
                    var Quantityater=Number(productone.data[0].Quantity)+Number(orderfollowshoppingcart.data[i].numberProduct);
                    console.log(Quantityater)
                    Quantity.push({id:orderfollowshoppingcart.data[i].productId,Quantity:Quantityater})
                }
                //console.log("qua vòng lọc danh sách")
                const QuantityProduct=await apiProduct.put('/Product/UpdateQuantityArrayProduct',Quantity,{headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'authorization': req.headers['authorization']
                  }});
                //console.log("qua vòng thay đổi số lượng")
                if(QuantityProduct.status!=200)
                return Promise.reject({message : "NOT Update Quantity product"});
            }
            //console.log("hoàn thành thay đổi")
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "NOT Change status Shopping_Cart"});
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
            const rs= await apiProduct.post('/Product/CheckProduct',{data:{"item":items},headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "CheckProduct fail"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "CheckProduct fail"});
        }  
    }
    CheckUserReally= async (req) => {
        try {
            const rs= await apiUser.get(`/User/findUser`,{headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': req.headers['authorization']
              }});
            if(rs.status!=200)
            {
                return Promise.reject({message : "CheckUserReally fail"});
            }
            if(rs.data==[])
            {
                return Promise.reject({message : "CheckUserReally fail"});
            }
            return Promise.resolve({result : rs.data});
        } catch (error) {
            return Promise.reject({message : "CheckUserReally fail"});
        }  
    }

}