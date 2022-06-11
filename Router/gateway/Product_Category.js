const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Product_CategoryController=require('../../Controllers/gateway/Product_Category');
const Controller = new Product_CategoryController();



Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/',Controller.findAll);
        Router.get('/:id',Controller.findOne);
        Router.get('/Product_Category/findItem',Controller.findItem);
        Router.get('/Product_Category/findProduct_category/:page',Controller.findProductcategory);
        Router.get('/Product_Category/countpagefindProduct_category',Controller.countpagefindProductcategory);


        Router.post('/',Controller.create);
        Router.put('/:id',Controller.update);
        Router.delete('/:id',Controller.delete);
module.exports= Router;