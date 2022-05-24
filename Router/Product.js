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
        Router.get('/findItem', Controller.findItem);
        Router.get('/searchbyprice/:price', Controller.searchbyprice);
        Router.get('/searchbypriceBetween', Controller.searchbypriceBetween);
        Router.get('/searchbyname/:name', Controller.searchbyname);
        Router.get('/searchbycategory', Controller.searchbycategory);
        Router.get('/searchbyfield/:category', Controller.searchbyfield);

        Router.post('/Product',ControllerToken.RoleAdmin,Controller.create);
        Router.put('/Product/:id',ControllerToken.RoleAdmin,Controller.update);
        //Router.delete('/delete/:id',ControllerToken.RoleAdmin, Controller.delete);
module.exports= Router;