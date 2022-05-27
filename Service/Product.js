const ProductRepository=require('../Repository/Product')
const Repository = new ProductRepository();
const imageToBase64=require('image-to-base64')
const dotenv=require('dotenv');
dotenv.config()


module.exports =class Product {
    ConverJsonimage_tobase64=async(item)=>{
        var listimage=[]    
        for(var i=0;i<item.length;i++)
        {
            
           await imageToBase64(process.env.Uploaps+item[i]) 
                .then(
                    (response) => {
                        var mity=item[i].split('.')
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
    findAll = async (page) => {
        try {
        if(!Number(page))
        return Promise.reject({messager :"Not page is number"} )
        const rs = await Repository.findAllpage(Number(page)-1);
        if (Object.keys(rs).length == 0) {
            return Promise.resolve([])
        }
        for(var i=0;i<Object.keys(rs).length;i++)
        rs[i].Image=await this.ConverJsonimage_tobase64(JSON.parse(rs[i].Image))
        return Promise.resolve(rs)
    } catch (error) {
        return Promise.reject({messager :error} )
    }
    }
    countpagefindAll = async () => {
        try {
        const rs = await Repository.findAll();
        return Promise.resolve({page:Math.ceil((Object.keys(rs).length)/10)})
    } catch (error) {
        return Promise.reject({messager :error} )
    }
    }
     create = async (item) => {
        try {
            const rs1 = await Repository.findItem({ProductName:item.ProductName});
            if(Object.keys(rs1).length>0)
            return Promise.reject({ messager : "fail! create",});
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
        const rs2 = await Repository.findOne(id);
        if(Object.keys(rs2).length==0)
        return Promise.reject({ messager : "fail! Not Product"});
        const rs1 = await Repository.findItem({ProductName:item.ProductName});
        if(Object.keys(rs1).length>0)
        return Promise.reject({ messager : "fail! Update exist Name Product"});
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
        const rs1 = await Repository.findOne(id);
        if(Object.keys(rs1).length==0)
        return Promise.reject({ messager : "fail! Not Product"});
        const rs = await Repository.update(id,{isDelete:1})
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
            rs[0].Image=await this.ConverJsonimage_tobase64(JSON.parse(rs[0].Image))
            return Promise.resolve(rs)
        } catch (error) {
            return Promise.reject({ messager: " Product not exists ! "  } )
        }
    }


     findItem = async (item,page) => {
         try {
            if(!Number(page))
            return Promise.reject({messager :"Not page is number"} )
            const rs = await Repository.findItempage(item,Number(page)-1);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve([])
            }
            for(var i=0;i<Object.keys(rs).length;i++)
            rs[i].Image=await this.ConverJsonimage_tobase64(JSON.parse(rs[i].Image))
            return Promise.resolve(rs)
             
         } catch (error) {
            return Promise.reject({messager :"Not Found"})
         }

    }
    countpagefindItem = async (item) => {
        try {
           const rs = await Repository.findItem(item);
           return Promise.resolve({page:Math.ceil((Object.keys(rs).length)/10)})
            
        } catch (error) {
           return Promise.reject({messager :"Not Found"})
        }

   }
    searchbyprice= async (price,page) => {
        try {
           if(!Number(page))
           return Promise.reject({messager :"Not page is number"} )
           const rs = await Repository.searchbypricepage(price,Number(page)-1,0);
           if (Object.keys(rs).length == 0) {
            return Promise.resolve([])
           }
           for(var i=0;i<Object.keys(rs).length;i++)
           rs[i].Image=await this.ConverJsonimage_tobase64(JSON.parse(rs[i].Image))
           return Promise.resolve(rs)
            
        } catch (error) {
           return Promise.reject({messager :error})
        }

   }
   countpagesearchbyprice= async (price) => {
    try {
       const rs = await Repository.searchbyprice(price,0);
       return Promise.resolve({page:Math.ceil((Object.keys(rs).length)/10)})
        
    } catch (error) {
       return Promise.reject({messager :error})
    }

}
   searchbypriceBetween= async (sart,end,page) => {
    try {
        if(!Number(page))
        return Promise.reject({messager :"Not page is number"})
       const rs = await Repository.searchbypriceBetweenpage(sart,end,Number(page)-1,0);
       if (Object.keys(rs).length == 0) {
        return Promise.resolve([])
       }
       for(var i=0;i<Object.keys(rs).length;i++)
       rs[i].Image=await this.ConverJsonimage_tobase64(JSON.parse(rs[i].Image))
       return Promise.resolve(rs)
        
    } catch (error) {
       return Promise.reject({messager :error})
    }
    }
    countpagesearchbypriceBetween= async (sart,end) => {
        try {
           const rs = await Repository.searchbypriceBetween(sart,end,0);
           return Promise.resolve({page:Math.ceil((Object.keys(rs).length)/10)})
        } catch (error) {
           return Promise.reject({messager :error})
        }
        }
    searchbyname= async (name,page) => {
        try {
            //console.log(name)
           if(!Number(page))
           return Promise.reject({messager :"Not page is number"} )
           const rs = await Repository.searchbynamepage(name,Number(page)-1,0);
           if (Object.keys(rs).length == 0) {
            return Promise.resolve([])
        }
           //console.log(rs)
           for(var i=0;i<Object.keys(rs).length;i++)
           rs[i].Image=await this.ConverJsonimage_tobase64(JSON.parse(rs[i].Image))
           console.log(rs)
           return Promise.resolve(rs)
        } catch (error) {
           return Promise.reject({messager :error})
        }
        }
    countpagesearchbyname= async (name) => {
            try {
                //console.log(name)
               const rs = await Repository.searchbyname(name,0);
               return Promise.resolve({page:Math.ceil((Object.keys(rs).length)/10)})
            } catch (error) {
               return Promise.reject({messager :error})
            }
            }
     searchbycategory= async (category,page) => {
        try {
            if(!Number(page))
            return Promise.reject({messager :"Not page is number"} )
            if(category.length==0)
            return Promise.reject({messager :"Not Found searchbycategory"} )
            var scategory=""
            for(var i=0;i<category.length;i++)
            {
                if(i==0)
                scategory=`JSON_SEARCH(\`categoryId\`, 'one','${category[i]}') is not null`
                else
                scategory=scategory+` or JSON_SEARCH(\`categoryId\`, 'one','${category[i]}') is not null`
            }
           const rs = await Repository.searchbycategorypage(scategory,Number(page)-1,0);
           if (Object.keys(rs).length == 0) {
            return Promise.resolve([])
           }
           for(var i=0;i<Object.keys(rs).length;i++)
           rs[i].Image=await this.ConverJsonimage_tobase64(JSON.parse(rs[i].Image))
           return Promise.resolve(rs)
        } catch (error) {
           return Promise.reject({messager :error})
        }
        }
        countpagesearchbycategory= async (category) => {
            try {
                if(category.length==0)
                return Promise.reject({messager :"Not Found searchbycategory"} )
                var scategory=""
                for(var i=0;i<category.length;i++)
                {
                    if(i==0)
                    scategory=`JSON_SEARCH(\`categoryId\`, 'one','${category[i]}') is not null`
                    else
                    scategory=scategory+` or JSON_SEARCH(\`categoryId\`, 'one','${category[i]}') is not null`
                }
               const rs = await Repository.searchbycategory(scategory,0);
               //console.log(rs)
               return Promise.resolve({page:Math.ceil((Object.keys(rs).length)/10)})
            } catch (error) {
               return Promise.reject({messager :error})
            }
            }
    CheckProduct=async(item)=>{
        try {
            for(var i=0;i<item.length;i++)
            {
                //console.log(item.length)
                var rs= await Repository.findItem({id:item[i],isDelete:0})
                //console.log(rs)
                if(Object.keys(rs)==0)
                return Promise.reject({messager :`item ${item[i]} not Exist`})
            }
            return Promise.resolve({messager: "All item Exist"})
        } catch (error) {
            return Promise.reject({messager: "not item Exist"})
        }

    }
    findArrayProduct=async(array)=>{
        try {
            const rs= await Repository.findArrayProduct(array,0)
            console.log(rs)
            if(Object.keys(rs)==0)
            return Promise.resolve([])
            return Promise.resolve(rs)
        } catch (error) {
            return Promise.reject({messager: "not find item array "})
        }
    }
}