const Product_ReviewsRepository=require('../Repository/Product_Reviews')
const Repository = new Product_ReviewsRepository();
const Image_ReviewsRepository=require('../Repository/Image_Reviews')
const RepositoryImage_Reviews = new Image_ReviewsRepository();
const {v4}=require('uuid')
const dotenv=require('dotenv');
dotenv.config();
const jwt=require('jsonwebtoken')

module.exports =class Product_Reviews {
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
     create = async (item,token) => {
        try {
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            console.log(select)
            if(!select)return Promise.reject({ messager: " Token not exists ! "  });
            console.log(select.userId!=item.userId)
            if(select.userId!=item.userId)return Promise.reject({ messager: " You have no right to create !"  });
            console.log(item)
            const rs = await Repository.create(item);
            console.log(rs)
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
            //console.log(item)
            if(Object.keys(item).length==0)
            return Promise.reject({ messager : "fail! not raelly any item",});
            const rs1 = await Repository.findItem({productId:item.productId,userId:item.userId});
            //console.log(rs1)
            if (Object.keys(rs1).length > 0) {
                return Promise.reject({messager :"userId really exist therefore not create one new Product Reiview !"} )
            }
            return Promise.resolve()
        } catch (error) {
            return Promise.reject({messager : "checkreallyProductReiview Faild "});
        }
        
    }
     update = async (id, item,token) => {
        try{
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select)return Promise.reject({ messager: " Token not exists ! "  });
            const rs1  = await Repository.findOne(id);
            if (Object.keys(rs1).length == 0) {
                return Promise.reject({ messager: " Product_Reviews not exists ! "  });
            }
            if(select.userId!=rs1[0].userId)return Promise.reject({ messager: " You have no right to change !"  });
            const rs = await Repository.update(id, item);
            if (rs) {
                return Promise.resolve({ messager: "Sucsess" })
            
            }
            return Promise.reject({ messager: "Update Faild" })
    } catch (error) {
        return Promise.reject({ messager: "Update Faild" } )
    }
    }
    createimagereview= async (id,images,token) => {
        try{
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select)return Promise.reject({ messager: " Token not exists ! "  });
            const rs1  = await Repository.findOne(id);
            if (Object.keys(rs1).length == 0) {
                return Promise.reject({ messager: " Product_Reviews not exists ! "  });
            }
            console.log(select)
            if(select.userId!=rs1[0].userId)return Promise.reject({ messager: " You have no right to change !"  });
            const rs =await RepositoryImage_Reviews.create({id:v4(),productReviewsId:id,Image:images})
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
            const rs2 = await RepositoryImage_Reviews.deleteAll({productReviewsId:id});
            if (!rs2) {
                return Promise.reject({ messager: "Delete Faild Image_Reviews." })
            }
            const rs = await Repository.delete(id)
            if (!rs) {
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
                return Promise.resolve([])
            }
            return Promise.resolve(rs)
        } catch (error) {
            return Promise.reject({ messager: " Product_Reviews not exists ! "  } )
        }
    }
     findItem = async (item) => {
         try {
            const rs = await Repository.findItem(item);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve([])
            }
            return Promise.resolve(rs)
             
         } catch (error) {
            return Promise.reject({messager :"Not Found"})
         }

    }
    find_AVGNumberStar_ProductTop10= async () => {
        try {
           const rs = await Repository.AVGNumberStar_ProductTop10();
           if (Object.keys(rs).length == 0) {
               return Promise.resolve([])
           }
           return Promise.resolve(rs)
            
        } catch (error) {
           return Promise.reject({messager :"Not Found"})
        }
   }

   
}