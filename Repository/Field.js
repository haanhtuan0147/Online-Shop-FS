const KnexRepository=require('./repository');
const Field=require('../Model/Field')
const Field01=new Field();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class Field extends KnexRepository{
    constructor(){
        super(Field01.tableName)
    }
}