const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Shopping_CartController=require('../Controllers/Shopping_Cart');
const Controller = new Shopping_CartController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/findAll', Controller.findAll);
        Router.get('/findOne/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);
        Router.get('/findShoppingcart_totalmoney', Controller.findShoppingcart_totalmoney);
        Router.get('/findShoppingcart_totalmoney_detail/:id', Controller.findShoppingcart_totalmoney_detail);

        Router.post('/create', Controller.create);
        Router.put('/Cancel_Confirm_Transport_Success/:id',ControllerToken.RoleUser,Controller.Cancel,Controller.Confirm_Transport_Success);
        //Router.put('/update/:id', Controller.update);
        //Router.delete('/delete/:id', Controller.delete);
module.exports= Router;