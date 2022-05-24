const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Shopping_CartController=require('../../Controllers/gateway/Shopping_Cart');
const Controller = new Shopping_CartController();

Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/Shopping_Cart',Controller.findAll);
        Router.get('/Shopping_Cart/:id',Controller.findOne);
        Router.get('/findItem',Controller.findItem);
        Router.get('/findShoppingcart_totalmoney',Controller.findShoppingcart_totalmoney);
        Router.get('/findShoppingcart_totalmoney_detail/:id',Controller.findShoppingcart_totalmoney_detail);

        Router.post('/Shopping_Cart',Controller.CheckUserReally,Controller.create);
        Router.put('/Cancel_Confirm_Transport_Success/:id',Controller.Cancel_Confirm_Transport_Success);
        //Router.put('/update/:id', Controller.update);
        //Router.delete('/delete/:id', Controller.delete);
module.exports= Router;