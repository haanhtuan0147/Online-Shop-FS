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
        Router.get('/Products/searchbyprice/:page', Controller.searchbyprice);
        Router.get('/Products/searchbyprice', Controller.countpagesearchbyprice);
        Router.get('/Products/searchbypriceBetween/:page', Controller.searchbypriceBetween);
        Router.get('/Products/countpagesearchbypriceBetween', Controller.countpagesearchbypriceBetween);
        Router.get('/Products/searchbyname/:page', Controller.searchbyname);
        Router.get('/Products/countpagesearchbyname',Controller.countpagesearchbyname);
        Router.get('/Products/searchbycategory/:page', Controller.searchbycategory);
        Router.get('/Products/countpagesearchbycategory',Controller.countpagesearchbycategory);
        Router.get('/CheckProduct', Controller.CheckProduct);

        
        Router.post('/Product',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.create);
        Router.put('/Product/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.update);
        Router.delete('/delete/:id',ControllerToken.RoleAdmin,ControllerToken.CheckToKenTime,Controller.delete);
module.exports= Router;