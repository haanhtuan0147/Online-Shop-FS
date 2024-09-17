const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Shopping_CartController=require('../Controllers/Shopping_Cart');
const Controller = new Shopping_CartController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();
Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.findAll);
        Router.get('/:id',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.findOne);
        Router.get('/Shopping_Cart/findItem',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.findItem);
        Router.get('/Shopping_Cart/findShoppingcart_totalmoney',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.findShoppingcarttotalmoney);
        Router.get('/Shopping_Cart/findShoppingcart_totalmoney_detail/:id',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.findShoppingcarttotalmoneydetail);
        Router.get('/Shopping_Cart/customerreliability/:userId',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.customerreliability);

        Router.post('/',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.create);
        Router.put('/Shopping_Cart/Cancel_Confirm_Transport_Success/:id',ControllerToken.RoleUser,ControllerToken.CheckToKenTime,Controller.Cancel,Controller.ConfirmTransportSuccess);
        //Router.put('/update/:id', Controller.update);
        //Router.delete('/delete/:id', Controller.delete);
module.exports= Router;