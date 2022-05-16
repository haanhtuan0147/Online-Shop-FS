const Connect  =require('../config/connect');
const knex = new Connect().knex;
const Bookshelf =require('bookshelf')(knex);

module.exports= Bookshelf.model('Field',{
    get tableName() { return 'Field'; },
    Product_Category(){
        return this.hasMany(Product_Category,"fieldId")
    }
});