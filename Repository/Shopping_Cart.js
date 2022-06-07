const KnexRepository=require('./repository');
const Shopping_Cart=require('../Model/Shopping_Cart')
const Shopping_Carts=new Shopping_Cart();
const Connect =require('../config/connect');
const knex = new Connect().knex;
module.exports=class Shopping_Cart extends KnexRepository{
    constructor(){
        super(Shopping_Carts.tableName)
    }
    findShoppingcarttotalmoney(item){
        return knex(this.tableName).where(item).orderBy('updatedDate', 'desc').select(`shopping_cart.*`,knex.raw(`(SELECT SUM(order_product.numberProduct*order_product.Money) FROM \`order_product\` WHERE order_product.shoppingcartId=shopping_cart.id)as Extort`),knex.raw(`"VND"as Currencyunit`)).orderBy('Extort','desc')
        //SELECT shopping_cart.*,(SELECT SUM(order_product.numberProduct*product.Money) FROM `product`,`order_product` WHERE product.id=order_product.productId and order_product.shoppingcartId=shopping_cart.id)as tong,"VND"as tien FROM `shopping_cart`
    }
    customerreliability(id){
        return knex.select(knex(this.tableName).where('userId','=',id).andWhere('Status','=','Cancel').count('Status').as('Cancel'),knex(this.tableName).where('userId','=',id).andWhere('Status','=','Success').count('Status').as('Success'))
        //SELECT shopping_cart.*,(SELECT SUM(order_product.numberProduct*product.Money) FROM `product`,`order_product` WHERE product.id=order_product.productId and order_product.shoppingcartId=shopping_cart.id)as tong,"VND"as tien FROM `shopping_cart`
    }
}