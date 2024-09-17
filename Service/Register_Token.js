const Register_TokenRepository=require('../Repository/Register_Token');
const Repository = new Register_TokenRepository();
const dotenv=require('dotenv');
dotenv.config();
const nodemailer=require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


module.exports =class Register_Token {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.resolve({status:200,rs:[]});
        }
        return Promise.resolve({status:200,rs:rs});
    } catch (error) {
        if(error.sqlMessage)
        return Promise.reject({status:406,rs:error.sqlMessage} );
        return Promise.reject({status:500,rs:"Syntax error"});
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
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
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
        if(error.sqlMessage)
        return Promise.reject({status:406,rs:error.sqlMessage} );
        return Promise.reject({status:500,rs:"Syntax error"});
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
        if(error.sqlMessage)
        return Promise.reject({status:406,rs:error.sqlMessage} );
        return Promise.reject({status:500,rs:"Syntax error"});
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
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
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
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
         }

    }
    ramdom(){
        return (Math.floor(Math.random()*(99999 - 10000) )+ 10000).toString()
    }
    CreateRegisterToken=  async (item) => {
        try {
            var Email=/^[a-z0-9](.?[a-z0-9]){5,}@gmail.com$/g
            if (!item.Email.match(Email)) {
                return Promise.reject({status:406,rs:"failed create gmail"} );
            }
           item.numberCheck=this.ramdom();
           const oauth2Client = new OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
          );
        
          oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN
          });
          const accessToken =await new Promise((resolve, reject) => {
              oauth2Client.getAccessToken((err, token) => {
              if (err) {
                  
                  resolve(null);
              }
              resolve(token);
            });
          })
          //console.log(accessToken)
          if(!accessToken)
          return Promise.reject({status:406,rs:"failed create gmail Accectoken"} );
        
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              type: "OAuth2",
              user: process.env.Gmail,
              accessToken,
              clientId: process.env.CLIENT_ID,
              clientSecret: process.env.CLIENT_SECRET,
              refreshToken: process.env.REFRESH_TOKEN
            }
          });
           var mailOptions = {
            from: process.env.Gmail,
            to: item.Email,
            subject: 'Gửi email dùng Node.js --- dammio.com',
            text: item.numberCheck
          }
           transporter.sendMail(mailOptions,function(error, info){
            if(error){
                console.log(error)
            }
            else{
                console.log(info)

            }
          })
            const rs=await Repository.create(item);
                if(rs) {
                    return Promise.resolve({status:200,rs: "Sucsuess"
                })
                }
         return Promise.reject({status:406,rs:"failed create gmail"} )
             
         } catch (error) {
            if(error.sqlMessage)
            return Promise.reject({status:406,rs:error.sqlMessage} );
            return Promise.reject({status:500,rs:"Syntax error"});
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
        if(error.sqlMessage)
        return Promise.reject({status:406,rs:error.sqlMessage} );
        return Promise.reject({status:500,rs:"Syntax error"});
    }

}



}