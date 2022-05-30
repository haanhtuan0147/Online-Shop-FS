const ToKenRepository=require('../Repository/ToKen')
const Repository = new ToKenRepository();
const UserRepository=require('../Repository/User')
const RepositoryUser= new UserRepository();
const dotenv=require('dotenv');
dotenv.config();
const {v4} =require('uuid')
const jwt=require('jsonwebtoken')


module.exports =class ToKen {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.resolve([]);
        }
        return Promise.resolve({result : rs});
    } catch (error) {
        return Promise.reject({messager :error} );
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
        return Promise.reject({messager : "Create Faild "});
        } catch (error) {
            return Promise.reject({messager : "Create Faild "});
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

     findOne = async (id) => {
        try {
            const rs  = await Repository.findOne(id);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve([]);
            }
            return Promise.resolve(rs);
        } catch (error) {
            return Promise.reject({ messager: " ToKen not exists ! "  } );
        }
    }


     findItem = async (item) => {
         try {
            const rs = await Repository.findItem(item);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve([]);
            }
            return Promise.resolve({result : rs});
             
         } catch (error) {
            return Promise.reject({messager :"Not Found"});
         }

    }
    CreateToken= async (email) => {
        try {
            const Acc=await RepositoryUser.findItem({Email:email});
            if(Object.keys(Acc).length==0) return Promise.reject({Message:"Token generation error"});
            const token=await jwt.sign({userId:Acc[0].id,Email:email,AccountRights:Acc[0].AccountRights,Date:new Date()},process.env.ACCES_TOKENUSERID);
            const item={
                id:v4(),
                userId:Acc[0].id,
                Token:token
            };
            //console.log(token)
            const createToken= await Repository.create(item);
            if(createToken)
            return Promise.resolve({Message:"Success",ToKen:token});
            return Promise.reject({Message:"Add Defective Token"});
        } catch (error) {
            return Promise.reject({Message:"Add Defective Token"});
        }
   }
   RoleRoot=async (token) => {
    try {
        //if(token==undefined) return Promise.reject({Message:"Token Rỗng"});
        const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
            if(data)
            return data;
            return false;
        });
        if(!select)return Promise.reject({Message:"Token Does Not Exist!"})
        if(select.AccountRights=="Root")
            return Promise.resolve();
            return Promise.reject({Message:"You Are Insufficient"});
        } catch (error) {
            return Promise.reject({Message:"You Are Insufficient"});
        }
    }
    RoleAdmin=async (token) => {
        try {
            //if(token==undefined) return Promise.reject({Message:"Token Rỗng"});
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            //console.log(token)
            if(!select)return Promise.reject({Message:"Token Does Not Exist!"})
               if(select.AccountRights=="Root"||select.AccountRights=="Admin")
                return Promise.resolve();
                return Promise.reject({Message:"You Are Insufficient"});
            } catch (error) {
                return Promise.reject({Message:"You Are Insufficient"});
            }
        }
    RoleUser=async (token) => {
        try {
        //if(token==undefined) return Promise.reject({Message:"Token Rỗng"});
        const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
            if(data)
            return data;
            return false;
        });
        if(!select)return Promise.reject({Message:"Token Does Not Exist!"})
           if(select.AccountRights=="Root"||select.AccountRights=="Admin"||select.AccountRights=="User")
            return Promise.resolve();
            return Promise.reject({Message:"You Are Insufficient"});
        } catch (error) {
            return Promise.reject({Message:"You Are Insufficient"});
        }
    }
    CheckToKenTime=async(token)=>{
        try {
                const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                    if(data)
                    return data;
                    return false;
                });
                if(!select)return Promise.reject({Message:"Token Does Not Exist!"});
                const date=new Date();
                const date2=new Date(select.Date);
                //console.log(date)
                //console.log(date2)    
                if(date.getTime()>date2.getTime()+10800000)
                return Promise.reject({Message:"Token Expired!"});
                return Promise.resolve();
            } catch (error) {
                return Promise.reject({Message:"Token Does Not Exist!"});
            }
    }


}