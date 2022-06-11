const Register_TokenRepository=require('../Repository/Register_Token')
const Repository = new Register_TokenRepository();
const dotenv=require('dotenv')
dotenv.config()
const nodemailer=require('nodemailer')


module.exports =class Register_Token {
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
            const rs = await Repository.create(item);
            if(rs) {
                return Promise.resolve({status:200,rs:{
                messager : "Sucsuess",
                Item:item
            }});
            }
        return Promise.reject({status:406,rs: "Create Faild "});
        } catch (error) {
            return Promise.reject({status:500,rs: "Create Faild "});
        }
        
    }
     update = async (id, item) => {
        try{
        const rs = await Repository.update(id, item);
        if (rs) {
            return Promise.resolve({status:200,rs:"Sucsess" });
           
        }
        return Promise.reject({status:406,rs: "Update Faild" });
    } catch (error) {
        return Promise.reject({status:500,rs: "Update Faild" } );
    }
    }
     delete = async (id) => {
         try{
        const rs = await Repository.delete(id);
        if (rs == 0) {
            return Promise.reject({status:406,rs: "Delete Faild" });
        }
        return Promise.resolve({status:200,rs: "Sucsuess"});
    } catch (error) {
        return Promise.reject({status:500,rs: "Delete Faild" } );
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
            return Promise.reject({status:500,rs:" Register_Token not exists ! "  } );
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
    ramdom(){
        return (Math.floor(Math.random()*(99999 - 10000) )+ 10000).toString()
    }
    CreateRegisterToken=  async (item) => {
        try {
           item.numberCheck=this.ramdom();
           var transporter = nodemailer.createTransport({
             service: 'gmail',
             auth: {
               user: process.env.Gmail,
               pass: process.env.pass
             }
           });
           var mailOptions = {
             from: process.env.Gmail,
             to: item.Email,
             subject: 'Gửi email dùng Node.js --- dammio.com',
             text: item.numberCheck
           };
            transporter.sendMail(mailOptions,function(error, info){
                if(error){
                    console.log(error);
                }
                else{
                    console.log("Sucsuess"+info);
                }
   
           });
           //console.log(item)
          const rs=await Repository.create(item);
               if(rs) {
                   return Promise.resolve({status:200,rs: "Sucsuess"
               });
               }
          return Promise.reject({status:406,rs:"failed create gmail"} );
            
        } catch (error) {
           return Promise.reject({status:500,rs :error} );
        }

                   
   }
   CheckNumberRegisterToken=async (item) => {
    try {
       const rs = await Repository.findItem({Email:item.Email});
       //console.log(rs)
       if (Object.keys(rs).length == 0) {
           return Promise.reject({status:406,rs:"Not Found"} );
       }
       const Datecreate=new Date(rs[0].createdDate);
       const Datenow=new Date();
       /*console.log(Datecreate.getTime()-Datenow.getTime())
       console.log(item.numberCheck==Number(rs[0].numberCheck))*/
       if(Datecreate.getTime()-(Datenow.getTime()+(1000*60*60*7))>-300000&&item.numberCheck==Number(rs[0].numberCheck))
       return Promise.resolve({status:200,rs:rs});
       return Promise.reject({status:406,rs:"Incorrect check number"});
        
    } catch (error) {
       return Promise.reject({status:500,rs:error});
    }

}



}