const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const ControllerUploadimage=require('../Controllers/Uploadimage');
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();

  Router.use(express.json());
  Router.use(bodyParser.urlencoded({ extended: true}));
  Router.post('/UploadAvatar',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,ControllerUploadimage.UploadAvatar);
  Router.post('/UploadArray',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,ControllerUploadimage.UploadArray);

  Router.get('/image/:name',(req,res,next)=>{
    res.sendFile(__basedir+`/Uploads/${req.params.name}`)
  });

module.exports= Router;