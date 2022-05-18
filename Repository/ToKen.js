const KnexRepository=require('./repository');
const ToKen=require('../Model/ToKen')
const ToKen01=new ToKen();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class ToKen extends KnexRepository{
    constructor(){
        super(ToKen01.tableName)
    }
}