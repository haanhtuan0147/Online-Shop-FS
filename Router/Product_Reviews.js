const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Product_ReviewsController=require('../Controllers/Product_Reviews');
const Controller = new Product_ReviewsController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();
const ControllerUploadimage=require('../Controllers/Uploadimage');



Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/findAll', Controller.findAll);
        Router.get('/findOne/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);
        Router.get('/findimagereview/:id', Controller.findimagereview);

        Router.post('/create',Controller.checknotreallyProductReiview,Controller.create);
        Router.post('/createimagereview/:id',ControllerUploadimage.UploadArray,Controller.createimagereview);
        Router.put('/update/:id',Controller.update);
        Router.delete('/delete/:id',ControllerToken.RoleAdmin, Controller.delete);
module.exports= Router;