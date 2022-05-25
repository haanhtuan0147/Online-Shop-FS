const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Product_ReviewsController=require('../Controllers/Product_Reviews');
const Controller = new Product_ReviewsController();
const Token=require('../Controllers/ToKen');
const Image_ReviewsController=require('../Controllers/Image_Reviews')
const ControllerImage=new Image_ReviewsController()
const ControllerToken=new Token();

Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/Product_Reviews', Controller.findAll);
        Router.get('/Product_Reviews/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);
        Router.get('/findimagereview/:id',ControllerImage.findimagereview);
        Router.get('/findimagereview_Product',ControllerImage.findimagereview_Product);

        Router.post('/Product_Reviews',ControllerToken.RoleUser,Controller.checknotreallyProductReiview,Controller.create);
        Router.post('/createimagereview/:id',ControllerToken.RoleUser,Controller.createimagereview);
        Router.put('/Product_Reviews/:id',ControllerToken.RoleUser,Controller.update);
        Router.delete('/Product_Reviews/:id',ControllerToken.RoleAdmin, Controller.delete);
module.exports= Router;