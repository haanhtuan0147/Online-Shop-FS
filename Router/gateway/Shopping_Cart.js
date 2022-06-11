const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Shopping_CartController=require('../../Controllers/gateway/Shopping_Cart');
const Controller = new Shopping_CartController();

Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/',Controller.findAll);
        Router.get('/:id',Controller.findOne);
        Router.get('/Shopping_Cart/findItem',Controller.findItem);
        Router.get('/Shopping_Cart/findShoppingcart_totalmoney',Controller.findShoppingcarttotalmoney);
        Router.get('/Shopping_Cart/findShoppingcart_totalmoney_detail/:id',Controller.findShoppingcarttotalmoneydetail);

        Router.post('/',Controller.CheckUserReally,Controller.CheckProduct,Controller.create);
        Router.put('/Shopping_Cart/Cancel_Confirm_Transport_Success/:id',Controller.CancelConfirmTransportSuccess);
        //Router.put('/update/:id', Controller.update);
        //Router.delete('/delete/:id', Controller.delete);
module.exports= Router;