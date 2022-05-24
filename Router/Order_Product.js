const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Order_ProductController=require('../Controllers/Order_Product');
const Controller = new Order_ProductController();


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/Order_Product', Controller.findAll);
        Router.get('/Order_Product/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);

        Router.post('/Order_Product', Controller.create);
        Router.put('/Order_Product/:id', Controller.update);
        Router.delete('/Order_Product/:id', Controller.delete);
module.exports= Router;