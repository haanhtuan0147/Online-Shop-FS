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

        Router.get('/',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.findAll);
        Router.get('/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.findOne);
        Router.get('/User/findItem',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.findItem);
        Router.get('/User/findUser',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.findUser)

        Router.post('/User/RegisterToken',Controller.CheckEmail,RegisterToken.CreateRegisterToken);
        Router.post('/User/RegisterUser',RegisterToken.CheckNumberRegisterToken,Controller.createUser)
        Router.post('/User/RegisterAdmin',ControllerToken.RoleRoot,ControllerToken.CheckToKenTime,RegisterToken.CheckNumberRegisterToken,Controller.createAdmin)
        Router.post('/User/Login',login.Authenticate,ControllerToken.CreateToken)
        Router.post('/User/CheckTime',ControllerToken.CheckToKenTime)

        Router.put('/:id',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.updateUser);
        
        Router.delete('/:id',ControllerToken.RoleRoot,ControllerToken.CheckToKenTime,Controller.deleteUser);

module.exports= Router;