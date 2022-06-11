const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Field=require('../../Controllers/gateway/Field')
const Controller=new Field()

Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

        Router.get('/',Controller.findAll);
        Router.get('/:id', Controller.findOne);
        Router.get('/Field/findItem', Controller.findItem);
        Router.get('/Field/findcategory/:id', Controller.findcategory);
        Router.get('/Field/findProduct_field/:id', Controller.findProductfield);
        Router.get('/Field/countpagefindProduct_field/:id', Controller.countpagefindProductfield);


        Router.post('/',Controller.create);
        Router.put('/:id',Controller.update);
        Router.delete('/:id',Controller.delete);
module.exports= Router;