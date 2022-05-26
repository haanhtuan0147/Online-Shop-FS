const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Image_ReviewsController=require('../Controllers/Image_Reviews');
const Controller = new Image_ReviewsController();


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/Image_Reviews',Controller.findAll);
        Router.get('/Image_Reviews/:id',Controller.findOne);
        Router.get('/findItem',Controller.findItem);

        Router.post('/Image_Reviews',Controller.create);
        Router.put('/Image_Reviews/:id',Controller.update);
        Router.delete('/Image_Reviews/:id',Controller.delete);
module.exports= Router;