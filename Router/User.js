const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const UserController=require('../Controllers/User');
const Controller = new UserController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();
const login=require('../Controllers/passport');
const ControllerRegisterToken=require('../Controllers/Register_Token')
const RegisterToken=new ControllerRegisterToken()
const ControllerUploadimage=require('../Controllers/Uploadimage')


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/findAll',ControllerToken.RoleRoot,Controller.findAll);
        Router.get('/findOne/:id',ControllerToken.RoleRoot,Controller.findOne);
        Router.get('/findItem',ControllerToken.RoleRoot,Controller.findItem);
        Router.get('/findUser',ControllerToken.RoleUser,Controller.findUser)
        Router.get('/AvatarUser/:name',(req,res,next)=>{
                res.sendFile(__basedir+`/Uploads/${req.params.name}`)
            })

        Router.post('/RegisterToken',Controller.CheckEmail,RegisterToken.CreateRegisterToken);
        Router.post('/RegisterUser',RegisterToken.CheckNumberRegisterToken,Controller.createUser)
        Router.post('/RegisterAdmin',ControllerToken.RoleRoot,RegisterToken.CheckNumberRegisterToken,Controller.createAdmin)
        Router.post('/Login',login.Authenticate,ControllerToken.CreateToken)
        Router.post('/UploadAvatar',ControllerToken.RoleUser,ControllerUploadimage.UploadAvatar)

        Router.put('/updateUser/:id',ControllerToken.RoleUser,Controller.updateUser);
        
        //Router.delete('/delete/:id',ControllerToken.RoleRoot,Controller.deleteUser);

module.exports= Router;