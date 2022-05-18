const Product_Reviews=require('../Repository/Product_Reviews')
const Repository = new Product_Reviews();
const Image_Reviews=require('../Repository/Image_Reviews')
const RepositoryImage_Reviews = new Image_Reviews();
const {v4}=require('uuid')
const serviceimage=require('../Service/Uploadimage')


module.exports =class Product_Reviews {
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
    checknotreallyProductReiview= async (item) => {
        try {
            console.log(item)
            if(Object.keys(item).length==0)
            return Promise.reject({ messager : "fail! not raelly any item",});
            const rs1 = await Repository.findItem({productId:item.productId,userId:item.userId});
            if (Object.keys(rs1).length > 0) {
                return Promise.reject({messager :"userId really exist therefore not create one new Product Reiview !"} )
            }
            return Promise.resolve()
        } catch (error) {
            return Promise.reject({messager : "checkreallyProductReiview Faild "});
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
    createimagereview= async (id,images) => {
        try{
            if(images.length==0)return Promise.reject({ messager: "updateimagereview Faild: not in image input?" })
            const rs1  = await Repository.findOne(id);
            if (Object.keys(rs1).length == 0) {
                return Promise.reject({ messager: " Product_Reviews not exists ! "  });
            }
            const rs =await RepositoryImage_Reviews.create({id:v4(),productReviewsId:id,Image:serviceimage.convertimage(images)})
            if (rs) {
                return Promise.resolve({ messager: "updateimagereview Sucsess" })
            }
            return Promise.reject({ messager: "updateimagereview Faild" })
    } catch (error) {
        return Promise.reject({ messager: error } )
    }
    }
     delete = async (id) => {
         try{
            const rs1 = await RepositoryImage_Reviews.findItem({productReviewsId:id});
            if (Object.keys(rs1).length == 0) {
                return Promise.reject({messager :"Not Found Image_Reviews"} )
            }
            const rs2 = await RepositoryImage_Reviews.deleteAll(rs1);
            if (rs2 == 0) {
                return Promise.reject({ messager: "Delete Faild Image_Reviews." })
            }
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
                return Promise.reject({ messager: " Product_Reviews not exists ! "  });
            }
            if (rs) {
                return Promise.resolve(rs)
            }
        } catch (error) {
            return Promise.reject({ messager: " Product_Reviews not exists ! "  } )
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
    findimagereview= async (id) => {
        try {
           const rs = await RepositoryImage_Reviews.findItem({productReviewsId:id});
           if (Object.keys(rs).length == 0) {
               return Promise.reject({messager :"Not Found"} )
           }
           return Promise.resolve({result : rs})
            
        } catch (error) {
           return Promise.reject({messager :"Not Found"})
        }

   }
   
}