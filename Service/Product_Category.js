const Product_CategoryRepository=require('../Repository/Product_Category')
const Repository = new Product_CategoryRepository();
const FieldRepository=require('../Repository/Field')
const RepositoryField = new FieldRepository();


module.exports =class Product_Category {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.resolve([])
        }
        return Promise.resolve(rs)
    } catch (error) {
        return Promise.reject({messager :error} )
    }
    }
     create = async (item) => {
        try {
            const onefield =await RepositoryField.findOne(item.fieldId);
            if(Object.keys(onefield).length==0)
            return Promise.reject({messager : "not is fieldid Exist"});
            const checknamecategory=await this.findItem({CategoryName:item.CategoryName});
            if(Object.keys(checknamecategory).length>0)
            return Promise.reject({messager :  "Faild category name exits"});
            const rs = await Repository.create(item);
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
     update = async (id, item) => {
        try{
            if(item.fieldId){
                const onefield =await RepositoryField.findOne(item.fieldId);
                if(Object.keys(onefield).length==0)
                return Promise.reject({messager : "not is fieldid Exist"});
            }
            if(item.CategoryName){
                const checknamecategory=await this.findItem({CategoryName:item.CategoryName});
                if(Object.keys(checknamecategory).length>0)
                return Promise.reject({messager :  "Faild category name exits"});
            }
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
            return Promise.reject({ messager: " Product_Category not exists ! "  } );
        }
    }


     findItem = async (item) => {
         try {
            const rs = await Repository.findItem(item);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve([]);
            }
            return Promise.resolve(rs);
             
         } catch (error) {
            return Promise.reject({messager :"Not Found"});
         }

    }
    checkArrayCategory= async (item) => {
        try {
            for(var i=0;i<item.length;i++){
                const rs = await Repository.findOne(item[i]);
                if (Object.keys(rs).length == 0) {
                    return Promise.reject({messager :"Not Found"});
                }
            }
           return Promise.resolve({messager :"Sucsuess"});
            
        } catch (error) {
           return Promise.reject({messager :"Not Found"});
        }

   }



}