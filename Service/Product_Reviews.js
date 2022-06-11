const Product_ReviewsRepository=require('../Repository/Product_Reviews')
const Repository = new Product_ReviewsRepository();
const Image_ReviewsRepository=require('../Repository/Image_Reviews')
const RepositoryImage_Reviews = new Image_ReviewsRepository();
const constdefault=new (require('./constdefault'))()
const {v4}=require('uuid')
const dotenv=require('dotenv');
dotenv.config();
const jwt=require('jsonwebtoken')

module.exports =class Product_Reviews {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
        return Promise.resolve({status:200,rs:rs});
    } catch (error) {
        return Promise.reject({status:500,rs:"wrong syntax"} );
    }
    }
     create = async (item,token) => {
        try {
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            //console.log(select)
            if(!select)return Promise.reject({status:406,rs: " Token not exists ! "  });
            //console.log(select.userId!=item.userId)
            if(select.AccountRights!=constdefault.AccountUser)return Promise.reject({status:406,rs:" You have no right to create !"  });
            item.userId=select.userId
            //console.log(item)
            const rs = await Repository.create(item);
            //console.log(rs)
            if(rs) {
                return Promise.resolve({status:200,rs:{
                messager : "Sucsuess",
                Item:item
            }});
            }
        return Promise.reject({status:406,rs:"Create Faild "});
        } catch (error) {
            return Promise.reject({status:500,rs:"Create Faild "});
        }
        
    }
    checknotreallyProductReiview= async (item,token) => {
        try {
            //console.log(item)
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select)return Promise.reject({status:406,rs:" Token not exists ! "  });
            if(Object.keys(item).length==0)
            return Promise.reject({status:406,rs: "fail! not raelly any item",});
            const rs = await Repository.findItem({productId:item.productId,userId:select.userId});
            //console.log(rs1)
            if (Object.keys(rs).length > 0) {
                return Promise.reject({status:406,rs:"userId really exist therefore not create one new Product Reiview !"} );
            }
            return Promise.resolve();
        } catch (error) {
            return Promise.reject({status:500,rs:"checkreallyProductReiview Faild "});
        }
        
    }
     update = async (id, item,token) => {
        try{
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select)return Promise.reject({status:406,rs:" Token not exists ! "  });
            const findoneproductreview  = await Repository.findOne(id);
            if (Object.keys(findoneproductreview).length == 0) {
                return Promise.reject({status:406,rs: " Product_Reviews not exists ! "  });
            }
            if(select.userId!=findoneproductreview[0].userId)return Promise.reject({status:406,rs: " You have no right to change !"  });
            const rs = await Repository.update(id, {NumberStar:item.NumberStar});
            if (rs) {
                return Promise.resolve({status:200,rs: "Sucsess" });
            
            }
            return Promise.reject({status:406,rs: "Update Faild" });
    } catch (error) {
        return Promise.reject({status:500,rs:"Update Faild" } );
    }
    }
    createimagereview= async (id,images,token) => {
        try{
            const select= await jwt.verify(token,process.env.ACCES_TOKENUSERID,(err,data)=>{
                if(data)
                return data;
                return false;
            });
            if(!select)return Promise.reject({status:406,rs:"Token not exists !"});
            const findoneproductreview  = await Repository.findOne(id);
            if (Object.keys(rs1).length == 0) {
                return Promise.reject({status:406,rs:" Product_Reviews not exists ! "  });
            }
            //console.log(select)
            if(select.userId!=findoneproductreview[0].userId)return Promise.reject({status:406,rs:" You have no right to change !"  });
            const rs =await RepositoryImage_Reviews.create({id:v4(),productReviewsId:id,Image:images});
            if (rs) {
                return Promise.resolve({status:200,rs:"createimagereview Sucsess" });
            }
            return Promise.reject({status:406,rs: "createimagereview Faild" });
    } catch (error) {
        return Promise.reject({status:500,rs:"wrong syntax" } );
    }
    }
     delete = async (id) => {
         try{
            const findproductReviewsId = await RepositoryImage_Reviews.findItem({productReviewsId:id});
            if (Object.keys(findproductReviewsId).length > 0) {
                const deleteAllRepositoryImage_Reviews = await RepositoryImage_Reviews.deleteAll({productReviewsId:id});
                if (!deleteAllRepositoryImage_Reviews) {
                    return Promise.reject({status:406,rs:"Delete Faild Image_Reviews." });
                }
            }
            const deleteproductReviews = await Repository.delete(id)
            if (!deleteproductReviews) {
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
                return Promise.resolve([]);
            }
            return Promise.resolve({status:200,rs:rs});
        } catch (error) {
            return Promise.reject({status:500,rs:" Product_Reviews not exists ! "  } );
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
    findAVGNumberStarProductTop10= async () => {
        try {
           const rs = await Repository.AVGNumberStarProductTop10();
           if (Object.keys(rs).length == 0) {
               return Promise.resolve({status:200,rs:[]});
           }
           return Promise.resolve({status:200,rs:rs});
            
        } catch (error) {
           return Promise.reject({status:500,rs:"Not Found"});
        }
   }
   
   findAVGNumberStarProduct= async (id) => {
    try {
       const rs = await Repository.AVGNumberStarProduct(id);
       if (Object.keys(rs).length == 0) {
           return Promise.resolve({status:200,rs:[]});
       }
       return Promise.resolve({status:200,rs:rs});
        
    } catch (error) {
       return Promise.reject({status:500,rs:"Not Found"});
    }
}


   
}