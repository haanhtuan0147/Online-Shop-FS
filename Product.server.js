const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv')
const cors=require('cors')
dotenv.config();
global.__basedir = __dirname;
const routerProduct =require('./Router/Product')
const routerField=require('./Router/Field')
const routerProduct_Category=require('./Router/Product_Category')
const routerProduct_Reviews=require('./Router/Product_Reviews')
class Product{
    app;
    PORT=4002;
    constructor(){
        this.app=express();
        this.conFig();
        this.start();
        this.router();
    }
    conFig() {
        this.app.use(express.json())
             .use(cors())
            .use(
                session({
                    secret: "keyboard cat",
                    resave: false,
                    saveUninitialized: true,
                    cookie: { secure: false }
                })
            )
            .use(passport.initialize())
            .use(passport.session())
            .use(bodyParser.urlencoded({extended:true}))
            .use(bodyParser.json())

    }
    start(){
        this.app.listen(this.PORT, () => {
            console.log(`server running at port: ${this.PORT}`);
        });
    }
    router(){
        this.app.use('/Product',routerProduct)
        .use('/Field',routerField)
        .use('/Product_Category',routerProduct_Category)
        .use('/Product_Reviews',routerProduct_Reviews)
    }
}
new Product();