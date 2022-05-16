const KnexRepository=require('./repository');
const Product_Category=require('../Model/Product_Category')
const Product_Category01=new Product_Category();
module.exports=class Product_Category extends KnexRepository{
    constructor(){
        super(Product_Category01.tableName)
    }
}