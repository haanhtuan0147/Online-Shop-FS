
const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const User=require('../Repository/User')
const RepositoryUser=new User()
const token=require('../Repository/ToKen')
const RepositoryToken=new token()

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads/");
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + '-' + Math.round(Math.random() * 1E9) 
      cb(null, filename + '-' + file.originalname )
  },
});
let uploadFile = multer({
  storage: storage,
  fileFilter:(req,file,cb) =>{
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
        req.file_error = "file not allowed";
        return cb(null,false);
    }
    cb(null, true);
},
  limits: { fileSize: maxSize },
}).single("avatar");
let uploadFileMiddleware = util.promisify(uploadFile);
exports.uploadFileMiddleware= uploadFileMiddleware;
////
let UploadArray = multer({
  storage: storage,
  fileFilter:(req,file,cb) =>{
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
        req.file_error = "file not allowed";
        return cb(null,false);
    }
    cb(null, true);
},
  limits: { fileSize: maxSize },
}).array("photos",10);
let UploadArrayMiddleware= util.promisify(UploadArray);
exports.UploadArrayMiddleware= UploadArrayMiddleware;
////
const upload = async (req, res) => {
    try {
      await uploadFileMiddleware(req, res);
      if (req.file == undefined) {
        return Promise.reject({ message: "Please upload a file!" });
      }
      const author = req.headers['authorization'];
      const token = author?.split(" ")[1];
      const rs = await RepositoryToken.findItem({Token:token});
      if (Object.keys(rs).length == 0) {
        return Promise.reject({messager :"Not Found"} )
      }
      const rs2 = await RepositoryUser.findItem({id:rs[0].userId});
      if (Object.keys(rs2).length == 0) {
        return Promise.reject({messager :"Not Found"} )
      }
      const rs3 =await RepositoryUser.update(rs[0].userId,{Avatar:req.file.filename})
      if (rs3) {
        return Promise.resolve({ messager: "Sucsess" })
       }
       return Promise.reject({ message: "Please upload a file!" });

    } catch (err) {
      return Promise.reject({
        message: `Could not upload the file: ${req.file.originalname}. ${err}`,
      });
    }
  };
exports.UploadAvatar = upload;
const UploadVi = async (req, res) => {
  try {
    await UploadArrayMiddleware(req, res);
    if (req.files == undefined) {
      return Promise.reject({ message: "Please upload a file!" });
    }
    return Promise.resolve()
  } catch (err) {
    return Promise.reject({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};
exports.UploadArray = UploadVi;
/*module.exports =class Checkfile {
    Checkfile = async (file) => {
         if(!file){
             return Promise.reject({Message:"Lỗi file rỗng"})
         }
        return Promise.resolve()
    }

}*/
exports.convertimage=(images)=>{
  var image=[]
  for(var i=0;i<images.length;i++)
  {
      image.push(images[i].filename)
      /*if(i==0)
      image=`[\"${images[i].filename}\"`
      else if(i==images.length-1)
      image=image+`,\"${images[i].filename}\"]`
      else
      image=image+`,\"${images[i].filename}\"`
      console.log(image)*/
  }
  //console.log(JSON.stringify(image))
  return JSON.stringify(image)
}