const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv')
global.__basedir = __dirname;
dotenv.config();
const routerfield=require('./Router/gateway/Field')
const routerProduct=require('./Router/gateway/Product')
const routerProduct_Category=require('./Router/gateway/Product_Category')
const routerProduct_Reviews=require('./Router/gateway/Product_Reviews')
const routerShopping_Cart=require('./Router/gateway/Shopping_Cart')
const routerUser=require('./Router/gateway/User')



class gateway{
    app;
    PORT=5000;
    constructor(){
        this.app=express();
        this.conFig();
        this.start();
        this.router();
    }
    conFig() {
        this.app.use(express.json())
             //.use(cors(corsOptions))
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
        this.app.use('/Field',routerfield)
        .use('/Product',routerProduct)
        .use('/Product_Category',routerProduct_Category)
        .use('/Product_Reviews',routerProduct_Reviews)
        .use('/Shopping_Cart',routerShopping_Cart)
        .use('/User',routerUser)
    }
}
new gateway();