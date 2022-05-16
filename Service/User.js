const User=require('../Repository/User')
const Repository = new User();
const Token=require('../Repository/ToKen')
const RepositoryToken = new Token();


module.exports =class User {
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
            if (rs) {
                return Promise.resolve(rs)
            }
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
            return Promise.resolve({result : rs})
             
         } catch (error) {
            return Promise.reject({messager :"Not Found"})
         }

    }
    findUser= async (Email,pass) => {
        try {
           const rs = await Repository.findItem({Email:Email,Password:pass});
           if (Object.keys(rs).length == 0) {
               return Promise.reject({messager :"Not Found"} )
           }
           return Promise.resolve({Email:rs[0].Email})
            
        } catch (error) {
           return Promise.reject({messager :"Not Found"})
        }

   }
   updateAccountRights= async (item,token) => {
    try {
       const rs = await RepositoryToken.findItem({Token:token});
       if (Object.keys(rs).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
       const rs2 = await Repository.findItem({id:rs[0].userId,AccountRights:item.AccountRights});
       if (Object.keys(rs2).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
       const rs1 = await Repository.update(rs[0].userId, item);
        if (rs1) {
            return Promise.resolve({ messager: "Sucsess" })
           
        }
        return Promise.reject({ messager: "Update Faild" });
    } catch (error) {
       return Promise.reject({messager :"Not updateAccountRights!"})
    }

   }
   deleteUser= async (id) => {
    try {
       const rs = await Repository.findItem({id:id});
       if (Object.keys(rs).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
       if(rs[0].AccountRights=="Root")
       return Promise.reject({messager :"this user cannot be deleted"} )
       const rs1 = await Repository.delete(id)
       if (rs1 == 0) {
           return Promise.reject({ messager: "Delete Faild" })
       }
       return Promise.resolve({messager : "Sucsuess"})
    } catch (error) {
       return Promise.reject({messager :"Not updateAccountRights!"})
    }

   }
}