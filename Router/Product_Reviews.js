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
        Router.get('/findimagereview_Product',ControllerImage.findimagereviewProduct);
        Router.get('/find_AVGNumberStar_ProductTop10',Controller.findAVGNumberStarProductTop10);
        Router.get('/find_AVGNumberStar_Product/:id',Controller.findAVGNumberStarProduct);

        Router.post('/Product_Reviews',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.checknotreallyProductReiview,Controller.create);
        Router.post('/createimagereview/:id',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.createimagereview);
        Router.put('/Product_Reviews/:id',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.update);
        Router.delete('/Product_Reviews/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.delete);
module.exports= Router;