const Shopping_CartRepository=require('../Repository/Shopping_Cart')
const Repository = new Shopping_CartRepository();
const order_productRepository=require('../Repository/Order_Product')
const Repositoryorder_product=new order_productRepository()
const constdefault=new(require('../Service/constdefault'))()
const dotenv=require('dotenv');
dotenv.config();
const jwt=require('jsonwebtoken')



module.exports =class Shopping_Cart {
    findAll = async (token) => {
        try {
            if(!token)return Promise.reject({status:406,rs:"not token?"});
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select) return Promise.reject({status:406,rs:"not user?"});
            if(select.AccountRights==constdefault.AccountUser){
                const rs = await Repository.findItem({userId:select.userId});
                if (Object.keys(rs).length == 0) {
                    return Promise.resolve({status:200,rs:[]});
                }
                return Promise.resolve({status:200,rs:rs});
            }
            else{
                const rs = await Repository.findAll();
                if (Object.keys(rs).length == 0) {
                    return Promise.resolve({status:200,rs:[]});
                }
                return Promise.resolve({status:200,rs:rs});
            }
    } catch (error) {
        return Promise.reject({status:500,rs:"wrong syntax"} );
    }
    }
     create = async (item,token) => {
        try {
            if(!token)return Promise.reject({status:406,rs:"not token?"});
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select) return Promise.reject({status:406,rs:"not user?"});
            if(select.AccountRights!="User")
            return Promise.reject({status:406,rs:"you not is a user?"});
            item.userId=select.userId;
            //console.log(item);
            const rs = await Repository.create(item);
            if(rs) {
                return Promise.resolve({status:200,rs:{
                messager : "Sucsuess",
                Item:item
            }});
            }
        return Promise.reject({status:406,rs: "Create Faild Shopping_Cart"});
        } catch (error) {
            return Promise.reject({status:500,rs: "Create Faild Shopping_Cart"});
        }
        
    }
     update = async (id, item) => {
        try{
        const rs = await Repository.update(id, item);
        if (rs) {
            return Promise.resolve({status:200,rs: "Sucsess" });
           
        }
        return Promise.reject({status:406,rs: "Update Faild" });
    } catch (error) {
        return Promise.reject({status:500,rs: "Update Faild" } );
    }
    }
     delete = async (id) => {
        try{
        const rs = await Repository.delete(id);
        if (rs == 0) {
            return Promise.reject({status:400,rs: "Delete Faild" });
        }
        return Promise.resolve({status:200,rs: "Sucsuess"});
    } catch (error) {
        return Promise.reject({status:500,rs: "Delete Faild" } );
    }
    }
     findOne = async (id,token) => {
        try {
            if(!token)return Promise.reject({status:406,rs:"not token?"});
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            //console.log(select)
            if(!select) return Promise.reject({status:406,rs:"not user?"});
            const rs  = await Repository.findOne(id);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve({status:200,rs:[]});
            }
            if(select.AccountRights==constdefault.AccountUser&&rs[0].userId!=select.userId)
            return Promise.reject({ messager: " you do not have permission to view this user's shopping cart ! "  });
            return Promise.resolve({status:200,rs:rs});
        } catch (error) {
            return Promise.reject({status:500,rs: " Shopping_Cart not exists ! "  } );
        }
    }
     findItem = async (item,token) => {
         try {
            if(!token)return Promise.reject({status:406,rs:"not token?"});
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select) return Promise.reject({status:406,rs:"not user?"});
            if(select.AccountRights==constdefault.AccountUser)
            item.userId=select.userId;
            const rs = await Repository.findItem(item);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve({status:200,rs:[]});
            }
            return Promise.resolve({status:200,rs:rs});
             
         } catch (error) {
            return Promise.reject({status:500,rs:"Not Found"});
         }

    }
    findShoppingcarttotalmoney= async (item,token) => {
        try {
        if(!token)return Promise.reject({status:406,rs:"not token?"});
        const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
            if(data)
            return data;
            return false;
        });
        if(!select) return Promise.reject({status:406,rs:"not user?"});
        if(select.AccountRights==constdefault.AccountUser) item.userId=select.userId
           const rs = await Repository.findShoppingcarttotalmoney(item);
           if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
          }
           return Promise.resolve({status:200,rs:rs});
            
        } catch (error) {
           return Promise.reject({status:500,rs:"Not Found"});
        }

   }
   findShoppingcarttotalmoneydetail= async (id,token) => {
    try {
        if(!token)return Promise.reject({status:406,rs:"not token?"});
        const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
            if(data)
            return data;
            return false;
        });
        if(!select) return Promise.reject({status:406,rs:"not user?"});
        const checkshoppingcart=await Repository.findOne(id);
        if(Object.keys(checkshoppingcart).length==0)return Promise.resolve({status:200,rs:[]});
        if(select.AccountRights==constdefault.AccountUser&&checkshoppingcart[0].userId!=select.userId)return Promise.resolve([]);
        const rs = await Repositoryorder_product.findShoppingcarttotalmoneydetail(id);
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
        return Promise.resolve({status:200,rs:rs});
        
    } catch (error) {
       return Promise.reject({status:500,rs:"Not Found"});
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
            if(Object.keys(checkshoppingcart).length==0)return Promise.resolve({status:200,rs:{Cancel:0,Success:0}});
            //if(select.AccountRights=="User"&&checkshoppingcart[0].userId!=select.userId)return Promise.resolve({Cancel:0,Success:0});
            const rs = await Repository.customerreliability(id);
            //console.log(">>>>>>","tổng cancel và success")
            //console.log(rs)
            if (Object.keys(rs).length == 0) {
                return Promise.resolve({status:200,rs:{Cancel:0,Success:0}});
            }
            return Promise.resolve({status:200,rs:rs}); 
        } catch (error) {
           return Promise.reject({status:500,rs:"Not Found"});
        }
    
        }
    Cancel=async(req, res, next,baseController)=>{
        try {
            //console.log(">>>>>","vào trạng thái thay đổi Status")
            const item = req.body;
            const author = req.headers['authorization'];
            const token = author?.split(" ")[1];
            const id = req.params.id;
            if(!token)return baseController.sendResponse({status:406,messager:"not token?"}, req, res);
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select) return baseController.sendResponse({status:406,messager:"not user?"}, req, res);
            const checkshoppingcart=await Repository.findOne(id);
            //console.log(checkshoppingcart)
            if(Object.keys(checkshoppingcart).length==0)return baseController.sendResponse({status:200,rs:[]}, req, res);
            if(item.Status==constdefault.StatusShoppingCartCancel&&checkshoppingcart[0].Status==constdefault.StatusShoppingCartWait&&checkshoppingcart[0].userId==select.userId)
            {
                //console.log(">>>>>","là user hủy shopping cart")
                var dates=new Date();
                var datess=new Date(dates.getTime()+(1000*60*60*7));
                const rs=await Repository.update(id,{CompletionTime:datess,Status:constdefault.StatusShoppingCartCancel});
                //console.log(">>>>>","trạng thái thay đổi ?",rs)
                if(rs)return baseController.sendResponse({status:200,rs:"successfully cancel the order!"}, req, res);
                return baseController.sendResponse({status:406,rs:"this status cannot be saved!"}, req, res);
            }
            if(select.AccountRights==constdefault.AccountUser)
            return baseController.sendResponse({ status:406,rs:"you are not authorized!"}, req, res);
            next();
            } 
            catch (error) {
                 baseController.sendResponse({status:500,rs:"wrong syntax"}, req, res);
            }
        
    }
    ConfirmTransportSuccess=async(id,item,token)=>{
        try {
        if(!token)return Promise.reject({status:406,rs:"not token?"});
        const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
            if(data)
            return data;
            return false;
        });
        if(!select) return Promise.reject({status:406,rs:"not user?"});
        const checkshoppingcart=await Repository.findOne(id);
        if(Object.keys(checkshoppingcart).length==0) return Promise.resolve({status:200,rs:[]});
        if(checkshoppingcart[0].Status==constdefault.StatusShoppingCartCancel||checkshoppingcart[0].Status==constdefault.StatusShoppingCartSuccess||item.Status==constdefault.StatusShoppingCartWait)
        {
            return Promise.reject({status:406,rs:"You can't change this status because you don't have permission!"});
        }
        var dates=new Date();
        var datess=new Date(dates.getTime()+(1000*60*60*7));
        const rs=await Repository.update(id,{CompletionTime:datess,Status:item.Status});
        if(rs)return Promise.resolve({status:200,rs:"successfully Status the order!"});
        return Promise.reject({status:406,rs:"this status cannot be saved!"});
        } catch (error) {
            return Promise.reject({status:500,rs:"wrong syntax"});
        }
        
    }



}