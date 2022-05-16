const KnexRepository=require('./repository');
const Shopping_Cart=require('../Model/Shopping_Cart')
const Shopping_Cart01=new Shopping_Cart();
module.exports=class Shopping_Cart extends KnexRepository{
    constructor(){
        super(Shopping_Cart01.tableName)
    }
}