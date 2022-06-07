const KnexRepository=require('./repository');
const Product_Reviews=require('../Model/Product_Reviews')
const Product_Reviews01=new Product_Reviews();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class Product_Reviews extends KnexRepository{
    constructor(){
        super(Product_Reviews01.tableName)
    }
}