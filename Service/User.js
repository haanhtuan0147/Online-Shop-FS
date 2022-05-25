const UserRepository=require('../Repository/User')
const Repository = new UserRepository();
const TokenRepository=require('../Repository/ToKen')
const RepositoryToken = new TokenRepository();
const dotenv=require('dotenv')
dotenv.config()
const imageToBase64=require('image-to-base64')


module.exports =class User {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.reject({messager :"Not Found"} )
        }
        return Promise.resolve(rs)
    } catch (error) {
        return Promise.reject({messager :error} )
    }
    }
     create = async (item) => {
        try {
            const rs = await Repository.create(item);
            delete item.Password
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
                return Promise.reject({ messager: " User not exists ! "  });
            }
            await imageToBase64(process.env.Uploaps+rs[0].Avatar) 
               .then(
                   (response) => {
                       rs[0].Avatar=`data:image/png;base64,`+response
                   }
               )
               .catch(
                   (error) => {
                    rs[0].Avatar=""
                   }
               )
            return Promise.resolve(rs)
        } catch (error) {
            return Promise.reject({ messager: " User not exists ! "  } )
        }
    }


     findItem = async (item) => {
         try {
            const rs = await Repository.findItem(item);
            if (Object.keys(rs).length == 0) {
                return Promise.reject({messager :"Not Found"} )
            }
            return Promise.resolve(rs)
             
         } catch (error) {
            return Promise.reject({messager :"Not Found"})
         }

    }
    findEmailPass= async (Email,pass) => {
        try {
            console.log(Email)
           const rs = await Repository.findItem({Email:Email,Password:pass});
           
           if (Object.keys(rs).length == 0) {
               return Promise.reject({messager :"Not Found"} )
           }
           return Promise.resolve({Email:rs[0].Email})
            
        } catch (error) {
           return Promise.reject({messager :error})
        }

   }
   findUser=async (token) => {
    try {
        const rs = await RepositoryToken.findItem({Token:token});
        if (Object.keys(rs).length == 0) {
            return Promise.reject({messager :"Not Found"} )
        }
        const rs2 = await Repository.findItem({id:rs[0].userId});
        if (Object.keys(rs2).length == 0) {
            return Promise.reject({messager :"Not Found"} )
        }
        return Promise.resolve(rs2) 
    } catch (error) {
       return Promise.reject({messager :error})
    }

   }
   updateAccountRights= async (id,item,token) => {
    try {
       const rs = await RepositoryToken.findItem({Token:token});
       if (Object.keys(rs).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
      
       const rs2 = await Repository.findItem({id:rs[0].userId});
       if (Object.keys(rs2).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
       const rs3 = await Repository.findItem({id:id});
       if (Object.keys(rs3).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
       if((rs2[0].AccountRights==rs3[0].AccountRights&&id==rs2[0].id)||(rs2[0].AccountRights=="Root")||(rs2[0].AccountRights=="Admin"&&rs3[0].AccountRights=="User"))
       {
           if(rs2[0].AccountRights=="Root"&&item.AccountRights!="Root")
           {

           }
           else{
            delete item.Email;
            delete item.AccountRights;
           }
        const rs1 = await Repository.update(id,item);
        if (rs1) {
         return Promise.resolve({ messager: "Sucsess" })
         }
       }
       return Promise.reject({ messager: "Update Faild" });
    } catch (error) {
       return Promise.reject({messager :error})
    }

   }
   deleteUser= async (id) => {
    try {
       const rs = await Repository.findOne(id);
       if (Object.keys(rs).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
       if(rs[0].AccountRights=="Root")
       return Promise.reject({messager :"this user cannot be deleted"} )
       //console.log(rs)
       const rs1 = await Repository.delete(id)
       if (rs1 == 0) {
           return Promise.reject({ messager: "Delete Faild" })
       }
       return Promise.resolve({messager : "Sucsuess"})
    } catch (error) {
       return Promise.reject({messager :error})
    }

   }
   CheckEmail= async (email) => {
    try {
       const rs = await Repository.findItem({Email:email});
       if (Object.keys(rs).length == 0) {
           return Promise.resolve({messager : "Sucsuess"})
       }
       return Promise.reject({messager :"Email already exists"} )
    } catch (error) {
       return Promise.reject({messager :error})
    }

   }
   CheckUserReally=async (token) => {
    try {
        console.log(token)
        const rs=await RepositoryToken.findItem({Token:token})
        if(Object.keys(rs).length==0)
        return Promise.reject({messager:"not token?"});
        return Promise.resolve({rs:"the user is exist"})
    } catch (error) {
       return Promise.reject({messager :error})
    }

   }
}