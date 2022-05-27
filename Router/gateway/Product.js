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
        Router.get('/Products/searchbyprice/:page',Controller.searchbyprice);
        Router.get('/Products/countpagesearchbyprice',Controller.pagecountsearchbyprice);
        Router.get('/Products/searchbypriceBetween/:page',Controller.searchbypriceBetween);
        Router.get('/Products/countpagesearchbypriceBetween',Controller.pagecountsearchbypriceBetween);
        Router.get('/Products/searchbyname/:page',Controller.searchbyname);
        Router.get('/Products/countpagesearchbyname',Controller.pagecountsearchbyname);


        Router.post('/Product',Controller.create);
        Router.put('/Product/:id',Controller.update);
        Router.delete('/delete/:id',Controller.delete);
module.exports= Router;