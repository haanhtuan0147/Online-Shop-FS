const Order_ProductRepository=require('../Repository/Order_Product')
const Repository = new Order_ProductRepository();
const {v4}=require('uuid')



module.exports =class Order_Product {
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
    createarray= async (id,arrayitem) => {
        try {
            if(Object.keys(arrayitem).length==0)
            return Promise.reject({ messager : "fail! createarray not item"});
            arrayitem.forEach(function(it){
                it.shoppingcartId=id
                it.id=v4()
            })
            const rs = await Repository.create(arrayitem);
            if(rs) {
                console.log(rs)
                return Promise.resolve({
                messager : "Sucsuess",
                Item:arrayitem
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
                return Promise.reject({ messager: " Order_Product not exists ! "  });
            }
            return Promise.resolve(rs)
        } catch (error) {
            return Promise.reject({ messager: " Order_Product not exists ! "  } )
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



}