const KnexRepository=require('./repository');
const ToKen=require('../Model/ToKen')
const ToKens=new ToKen();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class ToKen extends KnexRepository{
    constructor(){
        super(ToKens.tableName);
    }
}