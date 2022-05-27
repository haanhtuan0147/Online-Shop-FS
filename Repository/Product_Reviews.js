const KnexRepository=require('./repository');
const Product_Reviews=require('../Model/Product_Reviews')
const Product_Reviews01=new Product_Reviews();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class Product_Reviews extends KnexRepository{
    constructor(){
        super(Product_Reviews01.tableName)
    }
    AVGNumberStar_ProductTop10(){
        return knex.select('a.*',knex.raw(`(SELECT AVG(b.NumberStar) FROM \`${this.tableName}\` as b WHERE a.productId=b.productId)as "NumberStar"`)).fromRaw(`(SELECT DISTINCT c.productId FROM \`${this.tableName}\` as c) as a`).orderBy('NumberStar', 'desc').limit(10)
        //return knex.raw(`SELECT a.*,(SELECT AVG(b.NumberStar) FROM \`${this.tableName}\` as b WHERE a.productId=b.productId)as "NumberStar"  FROM(SELECT DISTINCT c.productId FROM \`${this.tableName}\` as c) as a GROUP BY NumberStar DESC LIMIT 10`)
    }
}