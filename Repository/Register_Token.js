const KnexRepository=require('./repository');
const Register_Token=require('../Model/Register_Token')
const Connect =require('../config/connect')
const knex = new Connect().knex;
const Register_Tokens=new Register_Token();
module.exports=class Register_Token extends KnexRepository{
    constructor(){
        super(Register_Tokens.tableName)
    }
}