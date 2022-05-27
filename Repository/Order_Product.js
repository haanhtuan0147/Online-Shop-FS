const KnexRepository=require('./repository');
const Order_Product=require('../Model/Order_Product')
const Order_Product01=new Order_Product();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class Order_Product extends KnexRepository{
    constructor(){
        super(Order_Product01.tableName)
    }
    findShoppingcart_totalmoney_detail(id){
        return knex(this.tableName).where({'shoppingcartId':id}).orderBy('updatedDate', 'desc').select('order_product.*',knex.raw(`(order_product.numberProduct*order_product.Money)as Extort`))
        //SELECT shopping_cart.*,(SELECT SUM(order_product.numberProduct*product.Money) FROM `product`,`order_product` WHERE product.id=order_product.productId and order_product.shoppingcartId=shopping_cart.id)as tong,"VND"as tien FROM `shopping_cart`
    }
}