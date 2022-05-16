const Connect  =require('../config/connect');
const knex = new Connect().knex;
const Bookshelf =require('bookshelf')(knex);

module.exports= Bookshelf.model('Product_Reviews',{
    get tableName() { return 'Product_Reviews'; },
    Image_Reviews(){
        return this.hasMany(Image_Reviews,"productReviewsId")
    }
});