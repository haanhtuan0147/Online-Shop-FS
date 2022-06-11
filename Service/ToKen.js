const ToKenRepository=require('../Repository/ToKen')
const Repository = new ToKenRepository();
const UserRepository=require('../Repository/User')
const RepositoryUser= new UserRepository();
const dotenv=require('dotenv');
dotenv.config();
const {v4} =require('uuid')
const jwt=require('jsonwebtoken')
const constdefault=new (require('./constdefault'))()


module.exports =class ToKen {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
        return Promise.resolve({status:200,rs:rs});
    } catch (error) {
        return Promise.reject({status:500,rs:"wrong syntax"} );
    }
    }
     create = async (item) => {
        try {
            if(Object.keys(item).length==0)
            return Promise.reject({status:406,rs: "fail! create",});
            const rs = await Repository.create(item);
            if(rs) {
                return Promise.resolve({status:200,rs:{
                messager : "Sucsuess",
                Item:item
            }})
            }
        return Promise.reject({status:406,rs:"Create Faild "});
        } catch (error) {
            return Promise.reject({status:500,rs:"Create Faild "});
        }
        
    }
     update = async (id, item) => {
        try{
        const rs = await Repository.update(id, item);
        if (rs) {
            return Promise.resolve({status:200,rs:"Sucsess" });
           
        }
        return Promise.reject({status:406,rs:"Update Faild" });
    } catch (error) {
        return Promise.reject({status:500,rs:"Update Faild" } );
    }
    }
     delete = async (id) => {
         try{
        const rs = await Repository.delete(id);
        if (rs == 0) {
            return Promise.reject({status:406,rs:"Delete Faild" });
        }
        return Promise.resolve({status:200,rs:"Sucsuess"});
    } catch (error) {
        return Promise.reject({status:500,rs:"Delete Faild" } );
    }
    }

     findOne = async (id) => {
        try {
            const rs  = await Repository.findOne(id);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve({status:200,rs:[]});
            }
            return Promise.resolve({status:200,rs:rs});
        } catch (error) {
            return Promise.reject({status:500,rs:" ToKen not exists ! "  } );
        }
    }


     findItem = async (item) => {
         try {
            const rs = await Repository.findItem(item);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve({status:200,rs:[]});
            }
            return Promise.resolve({status:200,rs:rs});
             
         } catch (error) {
            return Promise.reject({status:500,rs:"Not Found"});
         }

    }
    CreateToken= async (email) => {
        try {
            const Acc=await RepositoryUser.findItem({Email:email});
            if(Object.keys(Acc).length==0) return Promise.reject({status:406,rs:"Token generation error"});
            const token=await jwt.sign({userId:Acc[0].id,Email:email,AccountRights:Acc[0].AccountRights,Date:new Date()},process.env.ACCES_TOKENUSERID);
            const item={
                id:v4(),
                userId:Acc[0].id,
                Token:token
            };
            //console.log(token)
            const createToken= await Repository.create(item);
            if(createToken)
            return Promise.resolve({status:200,rs:{Message:"Success",ToKen:token}});
            return Promise.reject({status:406,rs:"Add Defective Token"});
        } catch (error) {
            return Promise.reject({status:500,rs:"Add Defective Token"});
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
        if(!select)return Promise.reject({status:406,rs:"Token Does Not Exist!"})
        if(select.AccountRights==constdefault.AccountRoot)
            return Promise.resolve();
            return Promise.reject({status:406,rs:"You Are Insufficient"});
        } catch (error) {
            return Promise.reject({status:500,rs:"You Are Insufficient"});
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
            if(!select)return Promise.reject({status:406,rs:"Token Does Not Exist!"})
               if(select.AccountRights==constdefault.AccountRoot||select.AccountRights==constdefault.AccountAdmin)
                return Promise.resolve();
                return Promise.reject({status:406,rs:"You Are Insufficient"});
            } catch (error) {
                return Promise.reject({status:500,rs:"You Are Insufficient"});
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
        if(!select)return Promise.reject({status:406,rs:"Token Does Not Exist!"})
           if(select.AccountRights==constdefault.AccountRoot||select.AccountRights==constdefault.AccountAdmin||select.AccountRights==constdefault.AccountUser)
            return Promise.resolve();
            return Promise.reject({status:406,rs:"You Are Insufficient"});
        } catch (error) {
            return Promise.reject({status:500,rs:"You Are Insufficient"});
        }
    }
    resfresh=async(select,date)=>{
        try {
            const update=await Repository.update(select[0].id,{updatedDate:date})
            if(update){
                return Promise.resolve();
            }
            return Promise.reject({status:406,rs:"Token Not Generated"});
            
        } catch (error) {
            return Promise.reject({status:500,rs:"Token Not Generated"});
        }
     
    }
    CheckToKenTime=async(token)=>{
        try {
            const select= await Repository.SelectToken({ToKen:token});
            //console.log(select)
            if(Object.keys(select).length==0)
            return Promise.reject({status:406,rs:"Token Does Not Exist!"});
            const date=((new Date()).getTime()+25200000);
            const date2=((new Date(select.updatedDate)).getTime())+10800000;
            if(date>date2)
            return Promise.reject({status:406,rs:"Token Expired!"});
            if(date+3600000>date2)
            {
                return this.resfresh(select,date);       
            }
            return Promise.resolve();
        } catch (error) {
            return Promise.reject({status:500,rs:"Token Does Not Exist!"})
        }
    }


}