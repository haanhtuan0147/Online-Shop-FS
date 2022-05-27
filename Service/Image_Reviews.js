const Image_ReviewsRepository=require('../Repository/Image_Reviews')
const Repository = new Image_ReviewsRepository();
const imageToBase64=require('image-to-base64')


module.exports =class Image_Reviews {
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
                return Promise.resolve([])
            }
            return Promise.resolve(rs)
        } catch (error) {
            return Promise.reject({ messager: " Image_Reviews not exists ! "  } )
        }
    }


     findItem = async (item) => {
         try {
            const rs = await Repository.findItem(item);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve([])
            }
            return Promise.resolve({result : rs})
             
         } catch (error) {
            return Promise.reject({messager :"Not Found"})
         }

    }
    ConverJsonimage_tobase64=async(items)=>{
        var listimage=[]
        for(var j=0;j<items.length;j++){
            var it=JSON.parse(items[j].Image)
            for(var i=0;i<it.length;i++)
            await imageToBase64(process.env.Uploaps+it[i]) 
                .then(
                    (response) => {
                    var mity=it[i].split('.')
                      listimage.push(`data:image/${mity[1]};base64,`+response)
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
            return Promise.resolve([])
        }
           var listimage=await this.ConverJsonimage_tobase64(rs)
          if(listimage.length==0)
          return Promise.resolve([])
          return Promise.resolve({ListImageReview:listimage})
            
        } catch (error) {
           return Promise.reject({messager :"Not Found"})
        }

   }
   findimagereview_Product= async (listItem) => {
    try {
        console.log(listItem)
       const rs = await Repository.findimagereview_Product(listItem);
       if (Object.keys(rs).length == 0) {
           return Promise.resolve([])
       }
      var listimage= await this.ConverJsonimage_tobase64(rs)
      if(listimage.length==0)
      return Promise.resolve([])
      return Promise.resolve({ListImageReview:listimage})
        
    } catch (error) {
       return Promise.reject({messager :"Not Found"})
    }

   }



}