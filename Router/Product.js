const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const ProductController=require('../Controllers/Product');
const Controller = new ProductController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();
Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/Product', Controller.findAll);
        Router.get('/Product/:id', Controller.findOne);
        Router.get('/findItem/:page', Controller.findItem);
        Router.get('/Product/searchbyprice/:page', Controller.searchbyprice);
        Router.get('/Product/searchbypriceBetween/:page', Controller.searchbypriceBetween);
        Router.get('/Product/searchbyname/:page', Controller.searchbyname);
        Router.get('/Product/searchbycategory/:page', Controller.searchbycategory);

        Router.post('/Product',ControllerToken.RoleAdmin,Controller.create);
        Router.put('/Product/:id',ControllerToken.RoleAdmin,Controller.update);
        //Router.delete('/delete/:id',ControllerToken.RoleAdmin, Controller.delete);
module.exports= Router;