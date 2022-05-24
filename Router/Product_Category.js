const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Product_CategoryController=require('../Controllers/Product_Category');
const Controller = new Product_CategoryController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();



Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/Product_Category', Controller.findAll);
        Router.get('/Product_Category/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);

        Router.post('/Product_Category',ControllerToken.RoleAdmin, Controller.create);
        Router.put('/Product_Category/:id',ControllerToken.RoleAdmin, Controller.update);
        Router.delete('/Product_Category/:id',ControllerToken.RoleAdmin, Controller.delete);
module.exports= Router;