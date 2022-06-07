const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const ToKenController=require('../Controllers/ToKen');
const Controller = new ToKenController();


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/ToKen', Controller.findAll);
        Router.get('/ToKen/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);

        Router.post('/ToKen', Controller.create);
        Router.put('/ToKen/:id', Controller.update);
        Router.delete('/ToKen/:id', Controller.delete);
module.exports= Router;