const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Register_TokenController=require('../Controllers/Register_Token');
const Controller = new Register_TokenController();


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/Register_Token', Controller.findAll);
        Router.get('/Register_Token/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);

        Router.post('/Register_Token', Controller.create);
        Router.put('/Register_Token/:id', Controller.update);
        Router.delete('/Register_Token/:id', Controller.delete);
module.exports= Router;