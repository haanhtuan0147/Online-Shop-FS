const Product=require('../Repository/Product')
const Repository = new Product();
const Rcategory=require('../Repository/Product_Category')
const Repositorycategory = new Rcategory();



module.exports =class Product {
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
                return Promise.reject({ messager: " Product not exists ! "  });
            }
            if (rs) {
                return Promise.resolve(rs)
            }
        } catch (error) {
            return Promise.reject({ messager: " Product not exists ! "  } )
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
    searchbyprice= async (price) => {
        try {
           const rs = await Repository.searchbyprice(price);
           if (Object.keys(rs).length == 0) {
               return Promise.reject({messager :"Not Found searchbyprice"} )
           }
           return Promise.resolve(rs)
            
        } catch (error) {
           return Promise.reject({messager :error})
        }

   }
   searchbypriceBetween= async (sart,end) => {
    try {
       const rs = await Repository.searchbypriceBetween(sart,end);
       if (Object.keys(rs).length == 0) {
           return Promise.reject({messager :"Not Found searchbypriceBetween"} )
       }
       return Promise.resolve(rs)
        
    } catch (error) {
       return Promise.reject({messager :error})
    }
    }
    searchbyname= async (name) => {
        try {
           const rs = await Repository.searchbyname(name);
           if (Object.keys(rs).length == 0) {
               return Promise.reject({messager :"Not Found searchbyname"} )
           }
           return Promise.resolve(rs)
            
        } catch (error) {
           return Promise.reject({messager :error})
        }
        }
     searchbycategory= async (category) => {
        try {
            if(category.length==0)
            return Promise.reject({messager :"Not Found searchbycategory"} )
            var scategory=""
            for(var i=0;i<category.length;i++)
            {
                if(i==0)
                scategory=`JSON_SEARCH(\`categoryId\`, 'one','${category[i]}') is not null`
                else
                scategory=scategory+` or JSON_SEARCH(\`categoryId\`, 'one','${category[i]}') is not null`
            }
           const rs = await Repository.searchbycategory(scategory);
           if (Object.keys(rs).length == 0) {
               return Promise.reject({messager :"Not Found searchbycategory"} )
           }
           return Promise.resolve(rs)
        } catch (error) {
           return Promise.reject({messager :error})
        }
        }
        
    searchbyfield= async (category) => {
        try {
            const rs1= await Repositorycategory.findItem({fieldId:category})
            if(Object.keys(rs1).length==0)
            return Promise.reject({messager :"Not Found searchbyfield"} )
            var scategory=""
            for(var i=0;i<Object.keys(rs1).length;i++)
            {
                if(i==0)
                scategory=`JSON_SEARCH(\`categoryId\`, 'one','${rs1[i].id}') is not null`
                else
                scategory=scategory+` or JSON_SEARCH(\`categoryId\`, 'one','${rs1[i].id}') is not null`
            }
           const rs = await Repository.searchbycategory(scategory);
           if (Object.keys(rs).length == 0) {
               return Promise.reject({messager :"Not Found searchbyfield"} )
           }
           return Promise.resolve(rs)
            
        } catch (error) {
           return Promise.reject({messager :"Not Found error"})
        }
        }

}