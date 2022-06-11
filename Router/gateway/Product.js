const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const ProductController=require('../../Controllers/gateway/Product');
const Controller = new ProductController();
Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));

        Router.get('/',Controller.findAll);
        Router.get('/Product/pagecountProduct', Controller.pagecountfindAll);
        Router.get('/:id',Controller.findOne);
        Router.get('/Product/findItem/:page',Controller.findItem);
        Router.get('/Product/countpagefindItem',Controller.pagecountfindItem);
        Router.get('/Product/searchbyprice/:page',Controller.searchbyprice);
        Router.get('/Product/countpagesearchbyprice',Controller.pagecountsearchbyprice);
        Router.get('/Product/searchbypriceBetween/:page',Controller.searchbypriceBetween);
        Router.get('/Product/countpagesearchbypriceBetween',Controller.pagecountsearchbypriceBetween);
        Router.get('/Product/searchbyname/:page',Controller.searchbyname);
        Router.get('/Product/countpagesearchbyname',Controller.pagecountsearchbyname);
        Router.get('/Product/find_AVGNumberStar_Product/:id',Controller.findAVGNumberStarProduct);
        Router.get('/Product/countpagefindDetailsProduct',Controller.countpagefindDetailsProduct);
        Router.get('/Product/findDetailsProduct/:page',Controller.findDetailsProduct);

        Router.post('/',Controller.checkArrayCategory,Controller.create);
        Router.put('/:id',Controller.update);
        Router.delete('/:id',Controller.delete);
module.exports= Router;