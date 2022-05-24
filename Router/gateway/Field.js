const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Field=require('../../Controllers/gateway/Field')
const Controller=new Field()

Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/Field',Controller.findAll);
        Router.get('/Field/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);
        Router.get('/findcategory/:id', Controller.findcategory);
        Router.get('/findProduct_field/:id', Controller.findProduct_field);

        Router.post('/Field',Controller.create);
        Router.put('/Field/:id',Controller.update);
        Router.delete('/Field/:id',Controller.delete);
module.exports= Router;