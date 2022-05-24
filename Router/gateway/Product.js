const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const ProductController=require('../../Controllers/gateway/Product');
const Controller = new ProductController();
Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));

        Router.get('/Product', Controller.findAll);
        Router.get('/Product/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);
        Router.get('/searchbyprice/:price', Controller.searchbyprice);
        Router.get('/searchbypriceBetween', Controller.searchbypriceBetween);
        Router.get('/searchbyname/:name', Controller.searchbyname);

        Router.post('/Product',Controller.create);
        Router.put('/Product/:id',Controller.update);
        //Router.delete('/delete/:id',ControllerToken.RoleAdmin, Controller.delete);
module.exports= Router;