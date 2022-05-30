const KnexRepository=require('./repository');
const Field=require('../Model/Field')
const Fields=new Field();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class Field extends KnexRepository{
    constructor(){
        super(Fields.tableName)
    }
}