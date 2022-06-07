const KnexRepository=require('./repository');
const Image_Reviews=require('../Model/Image_Reviews')
const Image_Reviews01=new Image_Reviews();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class Image_Reviews extends KnexRepository{
    constructor(){
        super(Image_Reviews01.tableName)
    }
}