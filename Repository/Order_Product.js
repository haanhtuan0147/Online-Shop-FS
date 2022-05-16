const KnexRepository=require('./repository');
const Order_Product=require('../Model/Order_Product')
const Order_Product01=new Order_Product();
module.exports=class Order_Product extends KnexRepository{
    constructor(){
        super(Order_Product01.tableName)
    }
}