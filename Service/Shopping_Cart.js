const Shopping_Cart=require('../Repository/Shopping_Cart')
const Repository = new Shopping_Cart();
const Tokens=require('../Repository/ToKen')
const RepositoryTokens = new Tokens();
const User=require('../Repository/User')
const RepositoryUser = new User();


module.exports =class Shopping_Cart {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.reject({messager :"Not Found"} )
        }
        return Promise.resolve({result : rs})
    } catch (error) {
        return Promise.reject({messager :error} )
    }
    }
     create = async (item) => {
        try {
            if(Object.keys(item).length==0)
            return Promise.reject({ messager : "fail! create",});
            const rs = await Repository.create(item);
            if(rs) {
                return Promise.resolve({
                messager : "Sucsuess",
                Item:item
            })
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
            return Promise.resolve({ messager: "Sucsess" })
           
        }
        return Promise.reject({ messager: "Update Faild" })
    } catch (error) {
        return Promise.reject({ messager: "Update Faild" } )
    }
    }
     delete = async (id) => {
         try{
        const rs = await Repository.delete(id)
        if (rs == 0) {
            return Promise.reject({ messager: "Delete Faild" })
        }
        return Promise.resolve({messager : "Sucsuess"})
    } catch (error) {
        return Promise.reject({ messager: "Delete Faild" } )
    }
    }

     findOne = async (id) => {
        try {
            const rs  = await Repository.findOne(id);
            if (Object.keys(rs).length == 0) {
                return Promise.reject({ messager: " Shopping_Cart not exists ! "  });
            }
            if (rs) {
                return Promise.resolve(rs)
            }
        } catch (error) {
            return Promise.reject({ messager: " Shopping_Cart not exists ! "  } )
        }
    }


     findItem = async (item) => {
         try {
            const rs = await Repository.findItem(item);
            if (Object.keys(rs).length == 0) {
                return Promise.reject({messager :"Not Found"} )
            }
            return Promise.resolve({result : rs})
             
         } catch (error) {
            return Promise.reject({messager :"Not Found"})
         }

    }
    findShoppingcart_totalmoney= async (item) => {
        try {
           const rs = await Repository.findShoppingcart_totalmoney(item);
           if (Object.keys(rs).length == 0) {
               return Promise.reject({messager :"Not Found"} )
           }
           return Promise.resolve({result : rs})
            
        } catch (error) {
           return Promise.reject({messager :"Not Found"})
        }

   }
    Cancel=async(req, res, next,baseController)=>{
        try {
        const item = req.body;
        const author = req.headers['authorization'];
        const token = author?.split(" ")[1];
        const id = req.params.id;
        const rs=await RepositoryTokens.findItem({Token:token})
        if(Object.keys(rs).length==0)return baseController.sendResponse({messager:"not token?"}, req, res.status(500));
        const rs1=await RepositoryUser.findItem({id:rs[0].userId})
        if(Object.keys(rs1).length==0) return baseController.sendResponse({messager:"not user?"}, req, res.status(500));
        const rs3=await Repository.findOne(id)
        if(Object.keys(rs3).length==0)return baseController.sendResponse({messager:"not Shopping cart?"}, req, res.status(500));
        /*console.log(rs1[0].AccountRights=="User")
        console.log(item.Status=="Cancel")
        console.log(rs3[0].Status=="Wait")
        console.log(rs3[0].userId==rs[0].userId)*/
        if(rs1[0].AccountRights=="User"&&item.Status=="Cancel"&&rs3[0].Status=="Wait"&&rs3[0].userId==rs[0].userId)
        {
            const rs2=await Repository.update(id,{Status:"Cancel"})
            console.log(rs2)
            if(rs2)return baseController.sendResponse({messager:"successfully cancel the order!"}, req, res.status(200));
            return baseController.sendResponse({messager:"this status cannot be saved!"}, req, res.status(500));
        }
        if(rs1[0].AccountRights=="User")
        return baseController.sendResponse({messager:"you are not authorized!"}, req, res.status(500));
        next()
        } catch (error) {
            baseController.sendResponse({messager:error}, req, res.status(500));
        }
        
    }
    Confirm_Transport_Success=async(id,item,token)=>{
        try {
        const rs=await RepositoryTokens.findItem({Token:token})
        if(Object.keys(rs).length==0)return Promise.reject({messager:"not token?"});
        const rs1=await RepositoryUser.findItem({id:rs[0].userId})
        console.log(rs1)
        if(Object.keys(rs1).length==0) return Promise.reject({messager:"not user?"});
        const rs3=await Repository.findOne(id)
        if(Object.keys(rs3).length==0) return Promise.reject({messager:"not Shopping cart?"});
        if((item.Status=="Cancel"&&rs3[0].Status=="Cancel")||item.Status=="Cancel"||rs3[0].Status=="Cancel"||rs3[0].Status=="Success"||item.Status=="Wait")
        {
            return Promise.reject({messager:"You can't change this status because you don't have permission!"});
        }
        const rs2=await Repository.update(id,{CompletionTime:new Date(),Status:item.Status})
        if(rs2)return Promise.resolve({messager:"successfully Status the order!"});
        return Promise.reject({messager:"this status cannot be saved!"});
        } catch (error) {
            return Promise.reject({messager:error});
        }
        
    }



}