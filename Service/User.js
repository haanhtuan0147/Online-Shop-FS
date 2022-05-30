const UserRepository=require('../Repository/User')
const Repository = new UserRepository();
const TokenRepository=require('../Repository/ToKen')
const RepositoryToken = new TokenRepository();
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
        return Promise.reject({messager:"not token Exist"});
        var rs ;
        if(select.AccountRights=="Root"){
            rs = await Repository.findAll();
        }
        if(select.AccountRights=="Admin"){
            rs = await Repository.findItem({AccountRights:"User"});
        }
        if (Object.keys(rs).length == 0) {
            return Promise.resolve([]);
        }
        for(var i=0;i<Object.keys(rs).length;i++)
        rs[i].Avatar=await this.converimagetobase64(rs[i].Avatar);
        return Promise.resolve(rs);
    } catch (error) {
        return Promise.reject({messager :error} );
    }
    }
     create = async (item) => {
        try {
            const rs = await Repository.create(item);
            delete item.Password;
            if(rs) {
                return Promise.resolve({
                messager : "Sucsuess",
                Item:item
            });
            }
        return Promise.reject({messager : "Create Faild "});
        } catch (error) {
            return Promise.reject({messager : "Create Faild "});
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
            return Promise.reject({messager:"not token Exist"});
            const rs  = await Repository.findOne(id);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve([]);
            }
            if(select.AccountRights=="Admin"&&(rs[0].AccountRights=="Admin"||rs[0].AccountRights=="Root")&&select.userId!=id){
                return Promise.resolve([]);
            }
            rs[0].Avatar=await this.converimagetobase64(rs[0].Avatar);
            return Promise.resolve(rs);
        } catch (error) {
            return Promise.reject({ messager: " User not exists ! "  } );
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
        return Promise.reject({messager:"not token Exist"});
        if(select.AccountRights=="Admin"){
            item.AccountRights="User";
        }
        console.log(item)
            const rs = await Repository.findItem(item);
            //console.log(rs)
            if (Object.keys(rs).length == 0) {
                return Promise.resolve([]);
            }
            for(var i=0;i<Object.keys(rs).length;i++)
            rs[i].Avatar=await this.converimagetobase64(rs[i].Avatar);
            return Promise.resolve(rs);
         } catch (error) {
            return Promise.reject({messager :"Not Found"});
         }

    }
    findEmailPass= async (Email,pass) => {
        try {
            //console.log(Email)
           const rs = await Repository.findItem({Email:Email,Password:pass,isDelete:0});
           
           if (Object.keys(rs).length == 0) {
               return Promise.reject({messager :"Not Found"} );
           }
           return Promise.resolve({Email:rs[0].Email});
            
        } catch (error) {
           return Promise.reject({messager :error});
        }

   }
   findUser=async (token) => {
    try {
        const rs = await RepositoryToken.findItem({Token:token});
        //console.log(rs)
        if (Object.keys(rs).length == 0) {
            return Promise.resolve([]);
        }
        const rs2 = await Repository.findItem({id:rs[0].userId,isDelete:0});
        //console.log(rs2)
        if (Object.keys(rs2).length == 0) {
            return Promise.resolve([]);
        }
        for(var i=0;i<Object.keys(rs2).length;i++)
        rs2[i].Avatar=await this.converimagetobase64(rs2[i].Avatar);
        return Promise.resolve(rs2) ;
    } catch (error) {
       return Promise.reject({messager :error});
    }

   }
   updateAccountRights= async (id,item,token) => {
    try {
       const checktoken = await RepositoryToken.findItem({Token:token});
       if (Object.keys(rs).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
      
       const checkuse = await Repository.findItem({id:checktoken[0].userId});
       if (Object.keys(checkuse).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
       const checkuseupdate = await Repository.findItem({id:id});
       if (Object.keys(checkuseupdate).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
       if((checkuse[0].AccountRights==checkuseupdate[0].AccountRights&&id==checkuse[0].id)||(checkuse[0].AccountRights=="Root")||(checkuse[0].AccountRights=="Admin"&&checkuseupdate[0].AccountRights=="User"))
       {
           if(checkuse[0].AccountRights=="Root"&&item.AccountRights!="Root")
           {

           }
           else{
            delete item.Email;
            delete item.AccountRights;
            delete item.isDelete;
           }
        const rs = await Repository.update(id,item);
        if (rs) {
         return Promise.resolve({ messager: "Sucsess" });
         }
       }
       return Promise.reject({ messager: "Update Faild" });
    } catch (error) {
       return Promise.reject({messager :error});
    }

   }
   deleteUser= async (id) => {
    try {
       const rs = await Repository.findOne(id);
       if (Object.keys(rs).length == 0) {
           return Promise.reject({messager :"Not Found"} );
       }
       if(rs[0].AccountRights=="Root")
       return Promise.reject({messager :"this user cannot be deleted"} );
       //console.log(rs)
       const rs1 = await Repository.update(id,{isDelete:1})
       if (!rs1) {
           return Promise.reject({ messager: "Delete Faild" });
       }
       return Promise.resolve({messager : "Sucsuess"});
    } catch (error) {
       return Promise.reject({messager :error});
    }

   }
   CheckEmail= async (email) => {
    try {
       const rs = await Repository.findItem({Email:email});
       if (Object.keys(rs).length == 0) {
           return Promise.resolve({messager : "Sucsuess"});
       }
       return Promise.reject({messager :"Email already exists"} );
    } catch (error) {
       return Promise.reject({messager :error});
    }

   }
}