const KnexRepository=require('./repository');
const User=require('../Model/User')
const User01=new User();
const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class User extends KnexRepository{
    constructor(){
        super(User01.tableName)
    }
}