const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const User=require('../../Controllers/gateway/User')
const Controller=new User()

Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/User',Controller.findAll);
Router.get('/User/:id',Controller.findOne);
Router.get('/findItem',Controller.findItem);
Router.get('/findUser',Controller.findUser)

Router.post('/RegisterToken',Controller.RegisterToken);
Router.post('/RegisterUser',Controller.RegisterUser)
Router.post('/RegisterAdmin',Controller.RegisterAdmin)
Router.post('/Login',Controller.Login)

Router.put('/User/:id',Controller.update);
Router.delete('/User/:id',Controller.delete);


module.exports= Router;