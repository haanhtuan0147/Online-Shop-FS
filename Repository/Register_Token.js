const KnexRepository=require('./repository');
const Register_Token=require('../Model/Register_Token')
const Register_Token01=new Register_Token();
module.exports=class Register_Token extends KnexRepository{
    constructor(){
        super(Register_Token01.tableName)
    }
}