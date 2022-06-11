const Image_ReviewsRepository=require('../Repository/Image_Reviews')
const Repository = new Image_ReviewsRepository();
const Product_ReviewsRepository=require('../Repository/Product_Reviews')
const RepositoryProduct_Reviews = new Product_ReviewsRepository();
const imageToBase64=require('image-to-base64')


module.exports =class Image_Reviews {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
        return Promise.resolve({status:200,rs:rs});
    } catch (error) {
        return Promise.reject({status:500,rs:error} );
    }
    }
     create = async (item) => {
        try {
            const checkProductReview = await RepositoryProduct_Reviews.findOne(item.productReviewsId)
            if(Object.keys(checkProductReview).length==0)
            return Promise.reject({status:406,rs:"Create Faild  ProductReview not exits"});
            const rs = await Repository.create(item);
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
     update = async (id, item) => {
        try{
        const rs = await Repository.update(id, item);
        if (rs) {
            return Promise.resolve({status:200,rs:"Sucsess"});
           
        }
        return Promise.reject({status:406,rs:"Update Faild" });
    } catch (error) {
        return Promise.reject({status:500,rs: "Update Faild" } );
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
            return Promise.reject({status:500,rs: " Image_Reviews not exists ! "  } );
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
    ConverJsonimagetobase64=async(items)=>{
        var listimage=[];
        for(var j=0;j<items.length;j++){
            var it=JSON.parse(items[j].Image);
            for(var i=0;i<it.length;i++)
            await imageToBase64(process.env.Uploaps+it[i]) 
                .then(
                    (response) => {
                    var mity=it[i].split('.');
                      listimage.push(`data:image/${mity[1]};base64,`+response);
                    }
                )
                .catch(
                    (error) => {
                    }
                )
        }
        return listimage
    }
    findimagereview= async (id) => {
        try {
           const rs = await Repository.findItem({productReviewsId:id});
           if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
           var listimage=await this.ConverJsonimagetobase64(rs);
          if(listimage.length==0)
          return Promise.resolve({status:200,rs:[]});
          return Promise.resolve({status:200,rs:listimage});
            
        } catch (error) {
           return Promise.reject({status:500,rs:"Not Found"});
        }

   }
   findimagereviewProduct= async (listItem) => {
    try {
        //console.log(listItem)
       const rs = await Repository.findimagereviewProduct(listItem);
       if (Object.keys(rs).length == 0) {
           return Promise.resolve([]);
       }
      var listimage= await this.ConverJsonimagetobase64(rs);
      if(listimage.length==0)
      return Promise.resolve({status:200,rs:[]});
      return Promise.resolve({status:200,rs:listimage});
        
    } catch (error) {
       return Promise.reject({status:500,rs:"Not Found"});
    }

   }



}