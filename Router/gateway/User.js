const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const User=require('../../Controllers/gateway/User')
const Controller=new User()

Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/',Controller.findAll);
Router.get('/:id',Controller.findOne);
Router.get('/User/findItem',Controller.findItem);
Router.get('/User/findUser',Controller.findUser);
Router.get('/User/customerreliability/:userId',Controller.customerreliability);

Router.post('/User/RegisterToken',Controller.RegisterToken);
Router.post('/User/RegisterUser',Controller.RegisterUser);
Router.post('/User/RegisterAdmin',Controller.RegisterAdmin);
Router.post('/User/Login',Controller.Login)

Router.put('/:id',Controller.update);
Router.delete('/:id',Controller.delete);


module.exports= Router;