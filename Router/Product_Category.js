const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Product_CategoryController=require('../Controllers/Product_Category');
const Controller = new Product_CategoryController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();



Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/findAll', Controller.findAll);
        Router.get('/findOne/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);

        Router.post('/create',ControllerToken.RoleAdmin, Controller.create);
        Router.put('/update/:id',ControllerToken.RoleAdmin, Controller.update);
        Router.delete('/delete/:id',ControllerToken.RoleAdmin, Controller.delete);
module.exports= Router;