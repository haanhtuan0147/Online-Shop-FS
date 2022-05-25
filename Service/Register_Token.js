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
                return Promise.reject({ messager: " Register_Token not exists ! "  });
            }
            return Promise.resolve(rs)
        } catch (error) {
            return Promise.reject({ messager: " Register_Token not exists ! "  } )
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
                    console.log(error)
                }
                else{
                    console.log("Sucsuess"+info)
                }
   
           });
           console.log(item)
          const rs=await Repository.create(item);
               if(rs) {
                   return Promise.resolve({
                   messager : "Sucsuess"
               })
               }
          return Promise.reject({messager :"failed create gmail"} )
            
        } catch (error) {
           return Promise.reject({messager :error} )
        }

                   
   }
   CheckNumberRegisterToken=async (item) => {
    try {
       const rs = await Repository.findItem({Email:item.Email});
       console.log(rs)
       if (Object.keys(rs).length == 0) {
           return Promise.reject({messager :"Not Found"} )
       }
       const Datecreate=new Date(rs[0].createdDate)
       const Datenow=new Date()
       /*console.log(Datecreate.getTime()-Datenow.getTime())
       console.log(item.numberCheck==Number(rs[0].numberCheck))*/
       if(Datecreate.getTime()-(Datenow.getTime()+(1000*60*60*7))>-300000&&item.numberCheck==Number(rs[0].numberCheck))
       return Promise.resolve(rs)
       return Promise.reject({messager :"Incorrect check number"})
        
    } catch (error) {
       return Promise.reject({messager :error})
    }

}



}