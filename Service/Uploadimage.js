
const util = require("util");
const multer = require("multer");
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
      return Promise.resolve({result:req.file.filename})
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
    return Promise.resolve({result:convertimage(req.files)})
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
convertimage=(images)=>{
  var image=[]
  for(var i=0;i<images.length;i++)
  {
      image.push(images[i].filename)
  }
  return JSON.stringify(image)
}