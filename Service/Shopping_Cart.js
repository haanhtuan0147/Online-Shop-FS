const Shopping_CartRepository=require('../Repository/Shopping_Cart')
const Repository = new Shopping_CartRepository();
const order_productRepository=require('../Repository/Order_Product')
const Repositoryorder_product=new order_productRepository()
const dotenv=require('dotenv');
dotenv.config();
const jwt=require('jsonwebtoken')

module.exports =class Shopping_Cart {
    findAll = async (token) => {
        try {
            if(!token)return Promise.reject({messager:"not token?"});
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select) return Promise.reject({messager:"not user?"});
            if(select.AccountRights=="User"){
                const rs = await Repository.findItem({userId:select.userId});
                if (Object.keys(rs).length == 0) {
                    return Promise.resolve([]);
                }
                return Promise.resolve(rs);
            }
            else{
                const rs = await Repository.findAll();
                if (Object.keys(rs).length == 0) {
                    return Promise.resolve([]);
                }
                return Promise.resolve(rs);
            }
    } catch (error) {
        return Promise.reject({messager :error} );
    }
    }
     create = async (item,token) => {
        try {
            if(!token)return Promise.reject({messager:"not token?"});
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select) return Promise.reject({messager:"not user?"});
            if(select.AccountRights!="User")
            return Promise.reject({messager:"you not is a user?"});
            item.userId=select.userId;
            //console.log(item);
            const rs = await Repository.create(item);
            if(rs) {
                return Promise.resolve({
                messager : "Sucsuess",
                Item:item
            });
            }
        return Promise.reject({messager : "Create Faild Shopping_Cart"});
        } catch (error) {
            return Promise.reject({messager : error});
        }
        
    }
     update = async (id, item) => {
        try{
        const rs = await Repository.update(id, item);
        if (rs) {
            return Promise.resolve({ messager: "Sucsess" });
           
        }
        return Promise.reject({ messager: "Update Faild" });
    } catch (error) {
        return Promise.reject({ messager: "Update Faild" } );
    }
    }
     delete = async (id) => {
        try{
        const rs = await Repository.delete(id);
        if (rs == 0) {
            return Promise.reject({ messager: "Delete Faild" });
        }
        return Promise.resolve({messager : "Sucsuess"});
    } catch (error) {
        return Promise.reject({ messager: "Delete Faild" } );
    }
    }
     findOne = async (id,token) => {
        try {
            if(!token)return Promise.reject({messager:"not token?"});
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            //console.log(select)
            if(!select) return Promise.reject({messager:"not user?"});
            const rs  = await Repository.findOne(id);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve([]);
            }
            if(select.AccountRights=="User"&&rs[0].userId!=select.userId)
            return Promise.reject({ messager: " you do not have permission to view this user's shopping cart ! "  });
            return Promise.resolve(rs);
        } catch (error) {
            return Promise.reject({ messager: " Shopping_Cart not exists ! "  } );
        }
    }
     findItem = async (item,token) => {
         try {
            if(!token)return Promise.reject({messager:"not token?"});
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select) return Promise.reject({messager:"not user?"});
            if(select.AccountRights=="User")
            item.userId=select.userId;
            const rs = await Repository.findItem(item);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve([]);
            }
            return Promise.resolve(rs);
             
         } catch (error) {
            return Promise.reject({messager :"Not Found"});
         }

    }
    findShoppingcarttotalmoney= async (item,token) => {
        try {
        if(!token)return Promise.reject({messager:"not token?"});
        const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
            if(data)
            return data;
            return false;
        });
        if(!select) return Promise.reject({messager:"not user?"});
        if(select.AccountRights=="User") item.userId=select.userId
           const rs = await Repository.findShoppingcarttotalmoney(item);
           if (Object.keys(rs).length == 0) {
            return Promise.resolve([]);
          }
           return Promise.resolve(rs);
            
        } catch (error) {
           return Promise.reject({messager :"Not Found"});
        }

   }
   findShoppingcarttotalmoneydetail= async (id,token) => {
    try {
        if(!token)return Promise.reject({messager:"not token?"});
        const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
            if(data)
            return data;
            return false;
        });
        if(!select) return Promise.reject({messager:"not user?"});
        const checkshoppingcart=await Repository.findOne(id);
        if(Object.keys(checkshoppingcart).length==0)return Promise.resolve([]);
        if(select.AccountRights=="User"&&checkshoppingcart[0].userId!=select.userId)return Promise.resolve([]);
        const rs = await Repositoryorder_product.findShoppingcarttotalmoneydetail(id);
        if (Object.keys(rs).length == 0) {
            return Promise.resolve([]);
        }
        return Promise.resolve(rs);
        
    } catch (error) {
       return Promise.reject({messager :"Not Found"});
    }

    }
    customerreliability= async (id,token) => {
        try {
            if(!token)return Promise.reject({messager:"not token?"});
            //console.log(">>>>>>","vào customerreliability")
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            //console.log(">>>>>>","giải mã token")
            if(!select) return Promise.reject({messager:"not user?"});
            const checkshoppingcart=await Repository.findItem({userId:id});
            //console.log(">>>>>>","check shopping cart với id userId")
            if(Object.keys(checkshoppingcart).length==0)return Promise.resolve({Cancel:0,Success:0});
            //if(select.AccountRights=="User"&&checkshoppingcart[0].userId!=select.userId)return Promise.resolve({Cancel:0,Success:0});
            const rs = await Repository.customerreliability(id);
            //console.log(">>>>>>","tổng cancel và success")
            //console.log(rs)
            if (Object.keys(rs).length == 0) {
                return Promise.resolve({Cancel:0,Success:0});
            }
            return Promise.resolve(rs); 
        } catch (error) {
           return Promise.reject({messager :"Not Found"});
        }
    
        }
    Cancel=async(req, res, next,baseController)=>{
        try {
            //console.log(">>>>>","vào trạng thái thay đổi Status")
            const item = req.body;
            const author = req.headers['authorization'];
            const token = author?.split(" ")[1];
            const id = req.params.id;
            if(!token)return baseController.sendResponse({messager:"not token?"}, req, res.status(500));
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select) return baseController.sendResponse({messager:"not user?"}, req, res.status(500));
            const checkshoppingcart=await Repository.findOne(id);
            //console.log(checkshoppingcart)
            if(Object.keys(checkshoppingcart).length==0)return baseController.sendResponse([], req, res.status(200));
            if(item.Status=="Cancel"&&checkshoppingcart[0].Status=="Wait"&&checkshoppingcart[0].userId==select.userId)
            {
                //console.log(">>>>>","là user hủy shopping cart")
                var dates=new Date();
                var datess=new Date(dates.getTime()+(1000*60*60*7));
                const rs=await Repository.update(id,{CompletionTime:datess,Status:"Cancel"});
                //console.log(">>>>>","trạng thái thay đổi ?",rs)
                if(rs)return baseController.sendResponse({messager:"successfully cancel the order!"}, req, res.status(200));
                return baseController.sendResponse({messager:"this status cannot be saved!"}, req, res.status(500));
            }
            if(select.AccountRights=="User")
            return baseController.sendResponse({messager:"you are not authorized!"}, req, res.status(500));
            next();
            } catch (error) {
                 baseController.sendResponse({messager:error}, req, res.status(500));
            }
        
    }
    ConfirmTransportSuccess=async(id,item,token)=>{
        try {
        if(!token)return Promise.reject({messager:"not token?"});
        const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
            if(data)
            return data;
            return false;
        });
        if(!select) return Promise.reject({messager:"not user?"});
        const checkshoppingcart=await Repository.findOne(id);
        if(Object.keys(checkshoppingcart).length==0) return Promise.resolve([]);
        if(checkshoppingcart[0].Status=="Cancel"||checkshoppingcart[0].Status=="Success"||item.Status=="Wait")
        {
            return Promise.reject({messager:"You can't change this status because you don't have permission!"});
        }
        var dates=new Date();
        var datess=new Date(dates.getTime()+(1000*60*60*7));
        const rs=await Repository.update(id,{CompletionTime:datess,Status:item.Status});
        if(rs)return Promise.resolve({messager:"successfully Status the order!"});
        return Promise.reject({messager:"this status cannot be saved!"});
        } catch (error) {
            return Promise.reject({messager:error});
        }
        
    }



}