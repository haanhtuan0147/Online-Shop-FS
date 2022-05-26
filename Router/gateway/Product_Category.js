const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Product_CategoryController=require('../../Controllers/gateway/Product_Category');
const Controller = new Product_CategoryController();



Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/Product_Category',Controller.findAll);
        Router.get('/Product_Category/:id',Controller.findOne);
        Router.get('/findItem',Controller.findItem);
        Router.get('/findProduct_category/:page',Controller.findProduct_category);
        Router.get('/countpagefindProduct_category',Controller.countpagefindProduct_category);


        Router.post('/Product_Category',Controller.create);
        Router.put('/Product_Category/:id',Controller.update);
        Router.delete('/Product_Category/:id',Controller.delete);
module.exports= Router;