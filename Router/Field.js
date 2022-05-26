const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const FieldController=require('../Controllers/Field');
const Controller = new FieldController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/Field', Controller.findAll);
        Router.get('/Field/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);
        Router.get('/findcategory/:id', Controller.findcategory);

        Router.post('/Field',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.create);
        Router.put('/Field/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.update);
        Router.delete('/Field/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.delete);
module.exports= Router;