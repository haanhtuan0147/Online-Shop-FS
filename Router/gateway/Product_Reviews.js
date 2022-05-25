const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Product_ReviewsController=require('../../Controllers/gateway/Product_Reviews');
const Controller = new Product_ReviewsController();

Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/Product_Reviews',Controller.findAll);
        Router.get('/Product_Reviews/:id',Controller.findOne);
        Router.get('/findItem',Controller.findItem);
        Router.get('/findimagereview/:id',Controller.findimagereview);
        Router.get('/findimagereview_Product/:id',Controller.findimagereview_Product);

        Router.post('/Product_Reviews',Controller.create);
        Router.post('/createimagereview/:id',Controller.createimagereview);
        Router.put('/Product_Reviews/:id',Controller.update);
        Router.delete('/Product_Reviews/:id',Controller.delete);
module.exports= Router;