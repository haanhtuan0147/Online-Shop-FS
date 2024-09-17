const Order_ProductRepository=require('../Repository/Order_Product')
const Repository = new Order_ProductRepository();
const {v4}=require('uuid')
const shoppingcartRepository=require('../Repository/Shopping_Cart')
const Repositoryshoppingcart=new shoppingcartRepository()



module.exports =class Order_Product {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]})
        }
        return Promise.resolve({status:200,rs:rs})
    } catch (error) {
        if(error.sqlMessage)
        return Promise.reject({status:406,rs:error.sqlMessage} );
        return Promise.reject({status:500,rs:"Syntax error"});
    }
    }
     create = async (item) => {
        try {
            const rs = await Repository.create(item);
            if(rs) {
                return Promise.resolve({status:200,rs:{
                messager : "Sucsuess",
                Item:item
            }})
            }
        return Promise.reject({status:406,rs: "Create Faild "});
        } catch (error) {
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
        }
        
    }
    createarray= async (id,arrayitem) => {
        try {
            if(Object.keys(arrayitem).length==0)
            return Promise.reject({status:406,rs: "fail! createarray not item"});
            arrayitem.forEach(function(it){
                it.shoppingcartId=id
                it.id=v4()
            })
            const rs = await Repository.create(arrayitem);
            if(rs) {
                //console.log(rs)
                return Promise.resolve({status:200,rs:{
                messager : "Sucsuess",
                Item:arrayitem
            }})
            }
            await Repositoryshoppingcart.delete(id);
            await Repository.deleteAll({shoppingcartId:id});
            return Promise.reject({status:406,rs:"Create Faild "});
        } catch (error) {
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
        }
        
    }
     update = async (id, item) => {
        try{
        const rs = await Repository.update(id, item);
        if (rs) {
            return Promise.resolve({status:200,rs: "Sucsess" })
           
        }
        return Promise.reject({status:406,rs:"Update Faild" })
    } catch (error) {
        if(error.sqlMessage)
        return Promise.reject({status:406,rs:error.sqlMessage} );
        return Promise.reject({status:500,rs:"Syntax error"});
    }
    }
     delete = async (id) => {
         try{
        const rs = await Repository.delete(id)
        if (rs == 0) {
            return Promise.reject({status:406,rs:"Delete Faild" })
        }
        return Promise.resolve({status:200,rs:"Sucsuess"})
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
                return Promise.resolve({status:200,rs:[]})
            }
            return Promise.resolve({status:200,rs:rs})
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
                return Promise.resolve({status:200,rs:[]})
            }
            return Promise.resolve({status:200,rs:rs})
             
         } catch (error) {
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
         }

    }



}