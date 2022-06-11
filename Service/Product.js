const ProductRepository=require('../Repository/Product')
const Repository = new ProductRepository();
const imageToBase64=require('image-to-base64')
const dotenv=require('dotenv');
dotenv.config()


module.exports =class Product {
    ConverJsonimagetobase64=async(item)=>{
        var listimage=[] ;   
        for(var i=0;i<item.length;i++)
        {
            
           await imageToBase64(process.env.Uploaps+item[i]) 
                .then(
                    (response) => {
                        var mity=item[i].split('.');
                        listimage.push(`data:image/${mity[1]};base64,`+response);
                    }
                )
                .catch(
                    (error) => {
                    }
                )
        }
        return listimage;
    }
    findAll = async (page) => {
        try {
        if(!Number(page))
        return Promise.reject({status:406,rs:"Not page is number"} );
        const rs = await Repository.findAllpage(Number(page)-1);
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
        for(var i=0;i<Object.keys(rs).length;i++)
        rs[i].Image=await this.ConverJsonimagetobase64(JSON.parse(rs[i].Image));
        return Promise.resolve({status:200,rs:rs});
    } catch (error) {
        return Promise.reject({status:500,rs:"wrong syntax"} );
    }
    }
    countpagefindAll = async () => {
        try {
        const rs = await Repository.findAll();
        return Promise.resolve({status:200,rs:{page:Math.ceil((Object.keys(rs).length)/10)}});
    } catch (error) {
        return Promise.reject({status:500,rs:"wrong syntax"} );
    }
    }
     create = async (item) => {
        try {
            const checknameproduct = await Repository.findItem({ProductName:item.ProductName});
            if(Object.keys(checknameproduct).length>0)
            return Promise.reject({status:406,rs:"fail! create",});
            const rs = await Repository.create(item);
            if(rs) {
                return Promise.resolve({status:200,rs:{
                messager : "Sucsuess",
                Item:item
            }});
            }
        return Promise.reject({status:406,rs: "Create Faild "});
        } catch (error) {
            return Promise.reject({status:500,rs:"Create Faild "});
        }
        
    }
     update = async (id, item) => {
        try{
        const checkidprduct = await Repository.findOne(id);
        if(Object.keys(checkidprduct).length==0)
        return Promise.reject({status:406,rs:"fail! Not Product"});
        const checknameproduct = await Repository.findItem({ProductName:item.ProductName});
        if(Object.keys(checknameproduct).length>0)
        return Promise.reject({status:406,rs:"fail! Update exist Name Product"});
        const rs = await Repository.update(id, item);
        if (rs) {
            return Promise.resolve({status:200,rs:"Sucsess" });
        }
        return Promise.reject({status:406,rs:"Update Faild" });
    } catch (error) {
        return Promise.reject({status:500,rs:"Update Faild" } );
    }
    }
    UpdateQuantity= async (item) => {
        try{
            //console.log(item)
            for(var i=0;i<item.length;i++){
                const rs = await Repository.update(item[i].id,{Quantity:item[i].Quantity});
                if (!rs) {
                    return Promise.reject({status:406,rs:"Update Faild" });
                }
            }
            return Promise.resolve({status:200,rs:"Sucsess" });
    } catch (error) {
        return Promise.reject({status:500,rs:"Update Faild" } );
    }
    }
     delete = async (id) => {
     try{
        const rs1 = await Repository.findOne(id);
        if(Object.keys(rs1).length==0)
        return Promise.reject({status:406,rs:"fail! Not Product"});
        const rs = await Repository.update(id,{isDelete:1})
        if (rs == 0) {
            return Promise.reject({status:406,rs:"Delete Faild" });
        }
        return Promise.resolve({status:200,rs:"Sucsuess"});
    } catch (error) {
        return Promise.reject({status:500,rs:"Delete Faild"} );
    }
    }
     findOne = async (id) => {
        try {
            const rs  = await Repository.findOne(id);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve({status:200,rs:[]});
            }
            rs[0].Image=await this.ConverJsonimagetobase64(JSON.parse(rs[0].Image));
            return Promise.resolve({status:200,rs:rs});
        } catch (error) {
            return Promise.reject({status:500,rs: " Product not exists ! "  } )
        }
    }
     findItem = async (item,page) => {
         try {
            if(!Number(page))
            return Promise.reject({status:406,rs:"Not page is number"} );
            const rs = await Repository.findItempage(item,Number(page)-1);
            if (Object.keys(rs).length == 0) {
                return Promise.resolve({status:200,rs:[]});
            }
            for(var i=0;i<Object.keys(rs).length;i++)
            rs[i].Image=await this.ConverJsonimagetobase64(JSON.parse(rs[i].Image));
            return Promise.resolve({status:200,rs:rs});
             
         } catch (error) {
             //console.log(error)
            return Promise.reject({status:500,rs:"Not Found"});
         }

    }
    countpagefindItem = async (item) => {
        try {
           const rs = await Repository.findItem(item);
           return Promise.resolve({status:200,rs:{page:Math.ceil((Object.keys(rs).length)/10)}});
            
        } catch (error) {
           return Promise.reject({status:500,rs:"Not Found"});
        }

   }
    searchbyprice= async (price,page) => {
        try {
           if(!Number(page))
           return Promise.reject({status:406,rs:"Not page is number"} );
           const rs = await Repository.searchbypricepage(price,Number(page)-1,0);
           if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
           }
           for(var i=0;i<Object.keys(rs).length;i++)
           rs[i].Image=await this.ConverJsonimagetobase64(JSON.parse(rs[i].Image));
           return Promise.resolve({status:200,rs:rs});
            
        } catch (error) {
           return Promise.reject({status:500,rs:"wrong syntax"});
        }

   }
   countpagesearchbyprice= async (price) => {
    try {
       const rs = await Repository.searchbyprice(price,0);
       return Promise.resolve({status:200,rs:{page:Math.ceil((Object.keys(rs).length)/10)}});
        
    } catch (error) {
       return Promise.reject({status:500,rs:"wrong syntax"});
    }

}
   searchbypriceBetween= async (sart,end,page) => {
    try {
        if(!Number(page))
        return Promise.reject({status:406,rs:"Not page is number"});
       const rs = await Repository.searchbypriceBetweenpage(sart,end,Number(page)-1,0);
       if (Object.keys(rs).length == 0) {
        return Promise.resolve({status:200,rs:[]});
       }
       for(var i=0;i<Object.keys(rs).length;i++)
       rs[i].Image=await this.ConverJsonimagetobase64(JSON.parse(rs[i].Image));
       return Promise.resolve({status:200,rs:rs});
        
    } catch (error) {
       return Promise.reject({status:500,rs:"wrong syntax"});
    }
    }
    countpagesearchbypriceBetween= async (sart,end) => {
        try {
           const rs = await Repository.searchbypriceBetween(sart,end,0);
           return Promise.resolve({status:200,rs:{page:Math.ceil((Object.keys(rs).length)/10)}});
        } catch (error) {
           return Promise.reject({status:500,rs:"wrong syntax"});
        }
        }
    searchbyname= async (name,page) => {
        try {
            //console.log(name)
           if(!Number(page))
           return Promise.reject({status:406,rs:"Not page is number"} );
           const rs = await Repository.searchbynamepage(name,Number(page)-1,0);
           if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
           //console.log(rs)
           for(var i=0;i<Object.keys(rs).length;i++)
           rs[i].Image=await this.ConverJsonimagetobase64(JSON.parse(rs[i].Image));
           //console.log(rs)
           return Promise.resolve({status:200,rs:rs});
        } catch (error) {
           return Promise.reject({status:500,rs:"wrong syntax"});
        }
        }
    countpagesearchbyname= async (name) => {
            try {
                //console.log(name)
               const rs = await Repository.searchbyname(name,0);
               return Promise.resolve({status:200,rs:{page:Math.ceil((Object.keys(rs).length)/10)}});
            } catch (error) {
               return Promise.reject({status:500,rs:"wrong syntax"});
            }
            }
     searchbycategory= async (category,page) => {
        try {
            if(!Number(page))
            return Promise.reject({status:406,rs:"Not page is number"} );
            if(category.length==0)
            return Promise.reject({status:406,rs:"Not Found searchbycategory"} );
            var scategory=""
            for(var i=0;i<category.length;i++)
            {
                if(i==0)
                scategory=`JSON_SEARCH(\`categoryId\`, 'one','${category[i]}') is not null`;
                else
                scategory=scategory+` or JSON_SEARCH(\`categoryId\`, 'one','${category[i]}') is not null`;
            }
           const rs = await Repository.searchbycategorypage(scategory,Number(page)-1,0);
           if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
           }
           for(var i=0;i<Object.keys(rs).length;i++)
           rs[i].Image=await this.ConverJsonimagetobase64(JSON.parse(rs[i].Image));
           return Promise.resolve({status:200,rs:rs});
        } catch (error) {
           return Promise.reject({status:500,rs:error});
        }
        }
        countpagesearchbycategory= async (category) => {
            try {
                if(category.length==0)
                return Promise.reject({status:406,rs:"Not Found searchbycategory"} );
                var scategory="";
                for(var i=0;i<category.length;i++)
                {
                    if(i==0)
                    scategory=`JSON_SEARCH(\`categoryId\`, 'one','${category[i]}') is not null`;
                    else
                    scategory=scategory+` or JSON_SEARCH(\`categoryId\`, 'one','${category[i]}') is not null`;
                }
               const rs = await Repository.searchbycategory(scategory,0);
               //console.log(rs)
               return Promise.resolve({status:200,rs:{page:Math.ceil((Object.keys(rs).length)/10)}});
            } catch (error) {
               return Promise.reject({status:500,rs:"wrong syntax"});
            }
            }
    CheckProduct=async(item)=>{
        try {
            for(var i=0;i<item.length;i++)
            {
                //console.log(item.length)
                var rs= await Repository.findItem({id:item[i],isDelete:0});
                //console.log(rs)
                if(Object.keys(rs)==0)
                return Promise.reject({status:406,rs:`item ${item[i]} not Exist`});
            }
            return Promise.resolve({status:200,rs: "All item Exist"});
        } catch (error) {
            return Promise.reject({status:500,rs: "not item Exist"});
        }

    }
    findArrayProduct=async(array)=>{
        try {
            const rs= await Repository.findArrayProduct(array,0);
            //console.log(rs)
            if(Object.keys(rs)==0)
            return Promise.resolve({status:200,rs:[]});
            return Promise.resolve({status:200,rs:rs});
        } catch (error) {
            return Promise.reject({status:500,rs: "not find item array "});
        }
    }
    findDetailsProduct=async(page,item)=>{
        try {
            if(!Number(page))
            return Promise.reject({status:406,rs:"Not page is number"} );
            const rs= await Repository.findDetailsProduct(item.field,item.content,0,page);
            //console.log(rs)
            if(Object.keys(rs)==0)
            return Promise.resolve({status:200,rs:[]});
            for(var i=0;i<Object.keys(rs).length;i++)
            rs[i].Image=await this.ConverJsonimagetobase64(JSON.parse(rs[i].Image));
            return Promise.resolve({status:200,rs:rs});
        } catch (error) {
            return Promise.reject({status:500,rs: "not find item array "});
        }
    }
    countpagefindDetailsProduct=async(item)=>{
        try {
            const rs= await Repository.findDetailsProduct(item.field,item.content,0);
            return Promise.resolve({status:200,rs:{page:Math.ceil((Object.keys(rs).length)/10)}});
        } catch (error) {
            //console.log("vào đây")
            //console.log(error)
            return Promise.reject({status:500,rs: "not find item array "});
        }
    }
}