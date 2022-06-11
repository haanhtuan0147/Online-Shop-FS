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

        Router.get('/', Controller.findAll);
        Router.get('/:id', Controller.findOne);
        Router.get('/Product_Reviews/findItem', Controller.findItem);
        Router.get('/Product_Reviews/findimagereview/:id',ControllerImage.findimagereview);
        Router.get('/Product_Reviews/findimagereview_Product',ControllerImage.findimagereviewProduct);
        Router.get('/Product_Reviews/find_AVGNumberStar_ProductTop10',Controller.findAVGNumberStarProductTop10);
        Router.get('/Product_Reviews/find_AVGNumberStar_Product/:id',Controller.findAVGNumberStarProduct);

        Router.post('/',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.checknotreallyProductReiview,Controller.create);
        Router.post('/Product_Reviews/createimagereview/:id',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.createimagereview);
        Router.put('/:id',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.update);
        Router.delete('/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.delete);
module.exports= Router;