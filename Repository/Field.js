const KnexRepository=require('./repository');
const Field=require('../Model/Field')
const Field01=new Field();
module.exports=class Field extends KnexRepository{
    constructor(){
        super(Field01.tableName)
    }
}