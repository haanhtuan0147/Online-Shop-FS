const KnexRepository=require('./repository');
const Product=require('../Model/Product')
const Product01=new Product();
module.exports=class Product extends KnexRepository{
    constructor(){
        super(Product01.tableName)
    }
}