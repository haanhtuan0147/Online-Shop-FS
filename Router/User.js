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



Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/findAll',ControllerToken.RoleRoot,Controller.findAll);
        Router.get('/findOne/:id',ControllerToken.RoleRoot,Controller.findOne);
        Router.get('/findItem',ControllerToken.RoleRoot,Controller.findItem);

        Router.post('/RegisterToken', RegisterToken.CreateRegisterToken);
        Router.post('/RegisterUser',Controller.createUser)
        Router.post('/RegisterAdmin',ControllerToken.RoleRoot,Controller.createAdmin)
        Router.post('/Login',login.Authenticate,ControllerToken.CreateToken)

        Router.put('/updateUser',ControllerToken.RoleUser,Controller.updateUser);
        Router.put('/updateAdmin',ControllerToken.RoleAdmin,Controller.updateAdmin);
        Router.put('/updateRoot',ControllerToken.RoleRoot,Controller.updateRoot);

        Router.delete('/delete/:id',ControllerToken.RoleRoot,Controller.deleteUser);

module.exports= Router;