const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const ProductController=require('../Controllers/Product');
const Controller = new ProductController();
const Token=require('../Controllers/ToKen');
const ControllerToken=new Token();
Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/Product', Controller.findAll);
        Router.get('/pagecountProduct', Controller.pagecountfindAll);
        Router.get('/Product/:id', Controller.findOne);
        Router.get('/findItem/:page', Controller.findItem);
        Router.get('/countpagefindItem', Controller.countpagefindItem);
        Router.get('/Product/searchbyprice/:page', Controller.searchbyprice);
        Router.get('/Product/countpagesearchbyprice', Controller.countpagesearchbyprice);
        Router.get('/Product/searchbypriceBetween/:page', Controller.searchbypriceBetween);
        Router.get('/Product/countpagesearchbypriceBetween', Controller.countpagesearchbypriceBetween);
        Router.get('/Product/searchbyname/:page', Controller.searchbyname);
        Router.get('/Product/countpagesearchbyname',Controller.countpagesearchbyname);
        Router.get('/Product/searchbycategory/:page', Controller.searchbycategory);
        Router.get('/Product/countpagesearchbycategory', Controller.countpagesearchbycategory);
        Router.get('/CheckProduct', Controller.CheckProduct);

        
        Router.post('/Product',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.create);
        Router.put('/Product/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.update);
        Router.delete('/delete/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.delete);
module.exports= Router;