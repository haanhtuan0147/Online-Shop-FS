const Connect  =require('../config/connect');
const knex = new Connect().knex;
const Bookshelf =require('bookshelf')(knex);

module.exports= Bookshelf.model('Shopping_Cart',{
    get tableName() { return 'Shopping_Cart'; },
    Order_Product(){
        return this.hasMany(Order_Product,"shoppingcartId")
    }
});