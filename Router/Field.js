const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const FieldController=require('../Controllers/Field');
const Controller = new FieldController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/', Controller.findAll);
        Router.get('/:id', Controller.findOne);
        Router.get('/Field/findItem', Controller.findItem);
        Router.get('/Field/findcategory/:id', Controller.findcategory);

        Router.post('/',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.create);
        Router.put('/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.update);
        Router.delete('/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.delete);
module.exports= Router;