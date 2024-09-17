const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Product_ReviewsController=require('../../Controllers/gateway/Product_Reviews');
const Controller = new Product_ReviewsController();
const Shopping_CartController=require('../../Controllers/gateway/Shopping_Cart');
const ControllerShopping_Cart=new Shopping_CartController();

Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/',Controller.findAll);
        Router.get('/:id',Controller.findOne);
        Router.get('/Product_Reviews/findItem',Controller.findItem);
        Router.get('/Product_Reviews/findimagereview/:id',Controller.findimagereview);
        Router.get('/Product_Reviews/findimagereview_Product/:id',Controller.findimagereviewProduct);
        Router.get('/Product_Reviews/find_AVGNumberStar_ProductTop10',Controller.findAVGNumberStarProductTop10);
        
        Router.post('/',ControllerShopping_Cart.CheckUserReally,Controller.CheckProduct,Controller.create);
        Router.post('/Product_Reviews/createimagereview/:id',Controller.createimagereview);
        Router.put('/:id',Controller.update);
        Router.delete('/:id',Controller.delete);
module.exports= Router;