const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Product_CategoryController=require('../Controllers/Product_Category');
const Controller = new Product_CategoryController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();



Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/', Controller.findAll);
        Router.get('/:id', Controller.findOne);
        Router.get('/Product_CategoryfindItem', Controller.findItem);
        Router.get('/Product_Category/checkArrayCategory', Controller.checkArrayCategory);

        Router.post('/',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.create);
        Router.put('/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.update);
        Router.delete('/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.delete);
module.exports= Router;