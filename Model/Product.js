const Connect  =require('../config/connect');
const knex = new Connect().knex;
const Bookshelf =require('bookshelf')(knex);

module.exports= Bookshelf.model('Product',{
    get tableName() { return 'Product'; },
    Order_Product(){
        return this.hasMany(Order_Product,"productId")
    },
    Product_Reviews(){
        return this.hasMany(Product_Reviews,"productId")
    }
});