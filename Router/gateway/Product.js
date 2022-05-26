const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const ProductController=require('../../Controllers/gateway/Product');
const Controller = new ProductController();
Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));

        Router.get('/Product',Controller.findAll);
        Router.get('/pagecountProduct', Controller.pagecountfindAll);
        Router.get('/Product/:id',Controller.findOne);
        Router.get('/findItem/:page',Controller.findItem);
        Router.get('/countpagefindItem',Controller.pagecountfindItem);
        Router.get('/Product/searchbyprice/:page',Controller.searchbyprice);
        Router.get('/Product/countpagesearchbyprice',Controller.pagecountsearchbyprice);
        Router.get('/Product/searchbypriceBetween/:page',Controller.searchbypriceBetween);
        Router.get('/Product/countpagesearchbypriceBetween',Controller.pagecountsearchbypriceBetween);
        Router.get('/Product/searchbyname/:page',Controller.searchbyname);
        Router.get('/Product/countpagesearchbyname',Controller.pagecountsearchbyname);


        Router.post('/Product',Controller.create);
        Router.put('/Product/:id',Controller.update);
        Router.delete('/delete/:id',Controller.delete);
module.exports= Router;