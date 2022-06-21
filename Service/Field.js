const FieldRepository=require('../Repository/Field')
const Repository = new FieldRepository();
const Product_CategoryRepository=require('../Repository/Product_Category')
const RepositoryProduct_Category = new Product_CategoryRepository();


module.exports =class Field {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
        return Promise.resolve({status:200,rs:rs});
    } catch (error) {
        if(error.sqlMessage)
        return Promise.reject({status:406,rs:error.sqlMessage} );
        return Promise.reject({status:500,rs:"Syntax error"});
    }
    }
     create = async (item) => {
        try {
            const checknamefield=await Repository.findItem({FieldName:item.FieldName})
            if(Object.keys(checknamefield).length>0)
            return Promise.reject({status:406,rs: "Faild field name exits"});
            const rs = await Repository.create(item);
            if(rs) {
                return Promise.resolve({status:200,rs:{
                messager : "Sucsuess",
                Item:item
            }});
            }
        return Promise.reject({status:406,rs:"Create Faild item not right"});
        } catch (error) {
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
        }
        
    }
     update = async (id, item) => {
        try{
        if(item.FieldName){
            const checknamefield=await Repository.findItem({FieldName:item.FieldName})
            if(Object.keys(checknamefield).length>0)
            return Promise.reject({status:406,rs:"Faild field name exits"});
        }
        const rs = await Repository.update(id, item);
        if (rs) {
            return Promise.resolve({status:200,rs:"Sucsess" });
           
        }
        return Promise.reject({status:406,rs:"Update Faild" });
    } catch (error) {
        if(error.sqlMessage)
        return Promise.reject({status:406,rs:error.sqlMessage} );
        return Promise.reject({status:500,rs:"Syntax error"});
    }
    }
     delete = async (id) => {
         try{
            //console.log(id)
          await RepositoryProduct_Category.deletefield(id);
         // console.log(id)
           const rs = await Repository.delete(id);
           if (rs == 0) {
            return Promise.reject({status:406,rs: "Delete Faild field" });
            }
           return Promise.resolve({status:200,rs: "Sucsuess"});
    } catch (error) {
        if(error.sqlMessage)
        return Promise.reject({status:406,rs:error.sqlMessage} );
        return Promise.reject({status:500,rs:"Syntax error"});
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
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
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
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
         }

    }
    findcategory= async (id) => {
        try {
           const rs = await RepositoryProduct_Category.findItem({fieldId:id});
           if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
           }
           return Promise.resolve({status:200,rs:rs});
            
        } catch (error) {
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
        }

   }



}