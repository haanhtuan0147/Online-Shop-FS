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
//const ControllerUploadimage=require('../Controllers/Uploadimage')


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/User',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.findAll);
        Router.get('/User/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.findOne);
        Router.get('/findItem',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.findItem);
        Router.get('/findUser',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.findUser)

        Router.post('/RegisterToken',Controller.CheckEmail,RegisterToken.CreateRegisterToken);
        Router.post('/RegisterUser',RegisterToken.CheckNumberRegisterToken,Controller.createUser)
        Router.post('/RegisterAdmin',ControllerToken.RoleRoot,ControllerToken.CheckToKenTime,RegisterToken.CheckNumberRegisterToken,Controller.createAdmin)
        Router.post('/Login',login.Authenticate,ControllerToken.CreateToken)

        Router.put('/User/:id',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.updateUser);
        
        Router.delete('/User/:id',ControllerToken.RoleRoot,ControllerToken.CheckToKenTime,Controller.deleteUser);

module.exports= Router;