const Connect  =require('../config/connect');
const knex = new Connect().knex;
const Bookshelf =require('bookshelf')(knex);

module.exports= Bookshelf.model('User',{
    get tableName() { return 'User'; },
    ToKen(){
        return this.hasMany(ToKen,"userId")
    },
    Shopping_Cart(){
        return this.hasMany(Shopping_Cart,"userId")
    },
    Product_Reviews(){
        return this.hasMany(Product_Reviews,"userId")
    }
});