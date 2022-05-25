
const util = require("util");
const multer = require("multer");
const dotenv=require("dotenv")
dotenv.config()
const imageToBase64 = require('image-to-base64');
const maxSize = 20 * 1024 * 1024;
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
      var filenames
      await imageToBase64(process.env.Uploaps+req.file.filename) 
          .then(
              (response) => {
                  filenames=`data:${req.file.mimetype};base64,`+response
              }
          )
          .catch(
              (error) => {
                filenames=false
              }
          )
      if(!filenames)
      return Promise.reject({ message: "not to base64 file!" });
      return Promise.resolve({result:filenames})
    } catch (err) {
      return Promise.reject({
        message: `Could not upload the file: ${req.file.originalname}. ${err}`,
      });
    }
  };
exports.UploadAvatar = upload;
const UploadVi = async (req, res) => {
  try {
    //console.log(">>>>>>>>> vào đây",req)
    await UploadArrayMiddleware(req, res);
    if (req.files == undefined) {
      return Promise.reject({ message: "Please upload a file!" });
    }
    var image= await convertimage(req.files)
    return Promise.resolve({result: image})
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
convertimage= async(images)=>{
  var image=[]
  for(var i=0;i<images.length;i++)
  {
    await imageToBase64(process.env.Uploaps+images[i].filename) 
    .then(
          (response) => {
          image.push(`data:${images.mimetype||"image/png"};base64,`+response)
        }
    )
    .catch(
        (error) => {
          console.log(error)
        }
    )
      
  }
  return JSON.stringify(image)
}