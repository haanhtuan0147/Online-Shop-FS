const Connect  =require('../config/connect');
const knex = new Connect().knex;
const Bookshelf =require('bookshelf')(knex);

module.exports= Bookshelf.model('ToKen',{
    get tableName() { return 'ToKen'; },
});