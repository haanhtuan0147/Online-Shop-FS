const Product_CategoryRepository=require('../Repository/Product_Category')
const Repository = new Product_CategoryRepository();
const FieldRepository=require('../Repository/Field')
const RepositoryField = new FieldRepository();


module.exports =class Product_Category {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]})
        }
        return Promise.resolve({status:200,rs:rs})
    } catch (error) {
        return Promise.reject({status:500,rs:"wrong syntax"} )
    }
    }
     create = async (item) => {
        try {
            const onefield =await RepositoryField.findOne(item.fieldId);
            if(Object.keys(onefield).length==0)
            return Promise.reject({status:406,rs:"not is fieldid Exist"});
            const checknamecategory=await this.findItem({CategoryName:item.CategoryName});
            if(Object.keys(checknamecategory).length>0)
            return Promise.reject({status:406,rs:"Faild category name exits"});
            const rs = await Repository.create(item);
            if(rs) {
                return Promise.resolve({status:200,rs:{
                messager : "Sucsuess",
                Item:item
            }});
            }
        return Promise.reject({status:406,rs: "Create Faild "});
        } catch (error) {
            return Promise.reject({status:500,rs: "Create Faild "});
        }
        
    }
     update = async (id, item) => {
        try{
            if(item.fieldId){
                const onefield =await RepositoryField.findOne(item.fieldId);
                if(Object.keys(onefield).length==0)
                return Promise.reject({status:406,rs: "not is fieldid Exist"});
            }
            if(item.CategoryName){
                const checknamecategory=await this.findItem({CategoryName:item.CategoryName});
                if(Object.keys(checknamecategory).length>0)
                return Promise.reject({status:406,rs:  "Faild category name exits"});
            }
        const rs = await Repository.update(id, item);
        if (rs) {
            return Promise.resolve({status:200,rs: "Sucsess" });
           
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
            return Promise.reject({status:500,rs:" Product_Category not exists ! "  } );
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
    checkArrayCategory= async (item) => {
        try {
            for(var i=0;i<item.length;i++){
                const rs = await Repository.findOne(item[i]);
                if (Object.keys(rs).length == 0) {
                    return Promise.reject({status:406,rs:"Not Found"});
                }
            }
           return Promise.resolve({status:200,rs:"Sucsuess"});
            
        } catch (error) {
           return Promise.reject({status:500,rs:"Not Found"});
        }

   }



}