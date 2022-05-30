const KnexRepository=require('./repository');
const Image_Reviews=require('../Model/Image_Reviews')
const Image_Reviewss=new Image_Reviews();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class Image_Reviews extends KnexRepository{
    constructor(){
        super(Image_Reviewss.tableName)
    }
    findimagereviewProduct(listimage){
        return knex(this.tableName).whereIn('productReviewsId',listimage)
    }
}