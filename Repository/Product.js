const Connect =require('../config/connect')
const knex = new Connect().knex;
const KnexRepository=require('./repository');
const Product=require('../Model/Product')
const Product01=new Product();
module.exports=class Product extends KnexRepository{
    constructor(){
        super(Product01.tableName)
    }
    searchbypriceBetween(sart,end,isDelete){
        return knex(this.tableName).whereBetween('Money', [sart,end]).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc')
            .select()
    }
    searchbyprice(price,isDelete){
        return knex(this.tableName).where('Money','>=',price).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc')
        .select()
    }
    searchbyname(name,isDelete){
        return knex(this.tableName).whereLike('ProductName',`%${name}%`).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc')
        .select()
    }
    searchbycategory(category,isDelete){
        return knex(this.tableName).where(knex.raw(category)).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc')
        .select()
    }
    searchbypriceBetween(sart,end,page,isDelete){
        return knex(this.tableName).whereBetween('Money', [sart,end]).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
            .select()
    }
    searchbyprice(price,page,isDelete){
        return knex(this.tableName).where('Money','>=',price).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
        .select()
    }
    searchbyname(name,page,isDelete){
        return knex(this.tableName).whereLike('ProductName',`%${name}%`).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
        .select()
    }
    searchbycategory(category,page,isDelete){
        return knex(this.tableName).where(knex.raw(category)).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
        .select()
    }
    findAll(page) {
        return knex(this.tableName).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
            .select()
    }
    findItem(item,page) {
        return knex(this.tableName)
            .where(item).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
            .select()
    }
}