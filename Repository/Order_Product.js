const KnexRepository=require('./repository');
const Order_Product=require('../Model/Order_Product')
const Order_Product01=new Order_Product();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class Order_Product extends KnexRepository{
    constructor(){
        super(Order_Product01.tableName)
    }
}