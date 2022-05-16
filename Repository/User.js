const KnexRepository=require('./repository');
const User=require('../Model/User')
const User01=new User();
module.exports=class User extends KnexRepository{
    constructor(){
        super(User01.tableName)
    }
}