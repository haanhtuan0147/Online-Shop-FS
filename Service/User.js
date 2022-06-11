const UserRepository=require('../Repository/User')
const Repository = new UserRepository();
const TokenRepository=require('../Repository/ToKen')
const RepositoryToken = new TokenRepository();
const constdefault=new (require('./constdefault'))()
const dotenv=require('dotenv')
dotenv.config()
const imageToBase64=require('image-to-base64')
const jwt=require('jsonwebtoken')


module.exports =class User {
    converimagetobase64=async(item)=>{
        var Avatar="";
        await imageToBase64(process.env.Uploaps+item) 
               .then(
                   (response) => {
                    var mity=item.split('.');
                    Avatar=`data:image/${mity[1]};base64,`+response;
                   }
               )
               .catch(
                   (error) => {
                   }
               )
        return Avatar;
    }
    findAll = async (token) => {
        try {
        const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
        //console.log(select)
        if(!select)
        return Promise.reject({status:406,rs:"not token Exist"});
        var rs ;
        if(select.AccountRights==constdefault.AccountRoot){
            rs = await Repository.findAll();
        }
        if(select.AccountRights==constdefault.AccountAdmin){
            rs = await Repository.findItem({AccountRights:constdefault.AccountUser});
        }
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
        for(var i=0;i<Object.keys(rs).length;i++)
        rs[i].Avatar=await this.converimagetobase64(rs[i].Avatar);
        return Promise.resolve({status:200,rs:rs});
    } catch (error) {
        return Promise.reject({status:500,rs:"error"} );
    }
    }
     create = async (item) => {
        try {
            const rs = await Repository.create(item);
            delete item.Password;
            if(rs) {
                return Promise.resolve({status:200,rs:{
                messager : "Sucsuess",
                Item:item
            }});
            }
        return Promise.reject({status:406,rs:"Create Faild "});
        } catch (error) {
            return Promise.reject({status:500,rs: "Create Faild "});
        }
        
    }
     /*update = async (id, item) => {
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
    }*/

     findOne = async (id,token) => {
        try {
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select)
            return Promise.reject({status:406,rs:"not token Exist"});
            const rs  = await Repository.findOne(id);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve({status:200,rs:[]});
            }
            if(select.AccountRights==constdefault.AccountAdmin&&(rs[0].AccountRights==constdefault.AccountAdmin||rs[0].AccountRights==constdefault.AccountRoot)&&select.userId!=id){
                return Promise.resolve({status:200,rs:[]});
            }
            rs[0].Avatar=await this.converimagetobase64(rs[0].Avatar);
            return Promise.resolve({status:200,rs:rs});
        } catch (error) {
            return Promise.reject({status:500,rs:" User not exists ! "  } );
        }
    }


     findItem = async (item,token) => {
         try {
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
        if(!select)
        return Promise.reject({status:406,rs:"not token Exist"});
        if(select.AccountRights==constdefault.AccountAdmin){
            item.AccountRights=constdefault.AccountUser;
        }
        //console.log(item)
            const rs = await Repository.findItem(item);
            //console.log(rs)
            if (Object.keys(rs).length == 0) {
                return Promise.resolve({status:200,rs:[]});
            }
            for(var i=0;i<Object.keys(rs).length;i++)
            rs[i].Avatar=await this.converimagetobase64(rs[i].Avatar);
            return Promise.resolve({status:200,rs:rs});
         } catch (error) {
            return Promise.reject({status:500,rs:"Not Found"});
         }

    }
    findEmailPass= async (Email,pass) => {
        try {
            //console.log(Email)
           const rs = await Repository.findItem({Email:Email,isDelete:0});
           if (Object.keys(rs).length == 0) {
               return Promise.reject({status:406,rs:"Not Found Email"} );
           }
           if(pass==rs[0].Password)
           return Promise.resolve({Email:rs[0].Email});
           return Promise.resolve({status:406,rs:"Not Found Password"});
            
        } catch (error) {
           return Promise.reject({status:500,rs:"error"});
        }

   }
   findUser=async (token) => {
    try {
        const rs = await RepositoryToken.findItem({Token:token});
        //console.log(rs)
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
        const finduser = await Repository.findItem({id:rs[0].userId,isDelete:0});
        //console.log(rs2)
        if (Object.keys(finduser).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
        for(var i=0;i<Object.keys(finduser).length;i++)
        finduser[i].Avatar=await this.converimagetobase64(finduser[i].Avatar);
        return Promise.resolve({status:200,rs:finduser}) ;
    } catch (error) {
       return Promise.reject({status:500,rs:"error"});
    }

   }
   updateAccountRights= async (id,item,token) => {
    try {
       const checktoken = await RepositoryToken.findItem({Token:token});
       if (Object.keys(rs).length == 0) {
           return Promise.reject({status:406,rs:"Not Found"} )
       }
      
       const checkuse = await Repository.findItem({id:checktoken[0].userId});
       if (Object.keys(checkuse).length == 0) {
           return Promise.reject({status:406,rs: "Not Found"} )
       }
       const checkuseupdate = await Repository.findItem({id:id});
       if (Object.keys(checkuseupdate).length == 0) {
           return Promise.reject({status:406,rs: "Not Found"} )
       }
       if((checkuse[0].AccountRights==checkuseupdate[0].AccountRights&&id==checkuse[0].id)||(checkuse[0].AccountRights==constdefault.AccountRoot)||(checkuse[0].AccountRights==constdefault.AccountAdmin&&checkuseupdate[0].AccountRights==constdefault.AccountUser))
       {
           if(checkuse[0].AccountRights==constdefault.AccountRoot&&item.AccountRights!=constdefault.AccountRoot)
           {

           }
           else{
            delete item.Email;
            delete item.AccountRights;
            delete item.isDelete;
           }
        const rs = await Repository.update(id,item);
        if (rs) {
         return Promise.resolve({status:200,rs: "Sucsess" });
         }
       }
       return Promise.reject({status:406,rs:"Update Faild" });
    } catch (error) {
       return Promise.reject({status:500,rs:"wrong syntax"});
    }

   }
   deleteUser= async (id) => {
    try {
       const rs = await Repository.findOne(id);
       if (Object.keys(rs).length == 0) {
           return Promise.reject({status:406,rs:"Not Found"} );
       }
       if(rs[0].AccountRights==constdefault.AccountRoot)
       return Promise.reject({status:406,rs:"this user cannot be deleted"} );
       //console.log(rs)
       const rs1 = await Repository.update(id,{isDelete:1})
       if (!rs1) {
           return Promise.reject({status:406,rs: "Delete Faild" });
       }
       return Promise.resolve({status:200,rs: "Sucsuess"});
    } catch (error) {
       return Promise.reject({status:500,rs:"wrong syntax"});
    }

   }
   CheckEmail= async (email) => {
    try {
       const rs = await Repository.findItem({Email:email});
       if (Object.keys(rs).length == 0) {
           return Promise.resolve({status:200,rs:"Sucsuess"});
       }
       return Promise.reject({status:406,rs:"Email already exists"} );
    } catch (error) {
       return Promise.reject({status:500,rs:"wrong syntax"});
    }

   }
}