const Register_Token=require('../Repository/Register_Token')
const Repository = new Register_Token();


module.exports =class Register_Token {
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
            if(Object.keys(item).length==0)
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
            if (rs) {
                return Promise.resolve(rs)
            }
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
            return Promise.resolve({result : rs})
             
         } catch (error) {
            return Promise.reject({messager :"Not Found"})
         }

    }
    ramdom(){
        return (Math.floor(Math.random()*(99999 - 10000) )+ 10000).toString()
    }
    CreateRegisterToken=  async (item) => {
        try {
           var ram=this.ramdom();
           item.NumberAcces=ram;
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
             text: ram
           };
           
            transporter.sendMail(mailOptions,function(error, info){
                if(error){
                    console.log(error)
                }
                else{
                    console.log("Sucsuess"+info)
                }
   
           });
          const rs=await Repository.create(item);
               if(rs) {
                   return Promise.resolve({
                   messager : "Sucsuess"
               })
               }
               return Promise.reject({messager :"failed create gmail"} )
            
        } catch (error) {
           return Promise.reject({messager :"failed send gmail"} )
        }

                   
   }



}