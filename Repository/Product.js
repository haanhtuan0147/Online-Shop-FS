const Connect =require('../config/connect')
const knex = new Connect().knex;
const KnexRepository=require('./repository');
const Product=require('../Model/Product')
const Products=new Product();
module.exports=class Product extends KnexRepository{
    constructor(){
        super(Products.tableName)
    }
    findArrayProduct(array,isDelete){
        return knex(this.tableName).whereIn('id',array).andWhere("isDelete","=",isDelete).select()
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
        console.log("vào đây 1")
        return knex(this.tableName).where(knex.raw(category)).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc')
        .select()
    }
    searchbypriceBetweenpage(sart,end,page,isDelete){
        return knex(this.tableName).whereBetween('Money', [sart,end]).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
            .select()
    }
    searchbypricepage(price,page,isDelete){
        return knex(this.tableName).where('Money','>=',price).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
        .select()
    }
    searchbynamepage(name,page,isDelete){
        return knex(this.tableName).whereLike('ProductName',`%${name}%`).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
        .select()
    }
    searchbycategorypage(category,page,isDelete){
        return knex(this.tableName).where(knex.raw(category)).andWhere("isDelete","=",isDelete).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
        .select()
    }
    findAllpage(page) {
        return knex(this.tableName).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
            .select()
    }
    findItempage(item,page) {
        return knex(this.tableName)
            .where(item).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
            .select()
    }
}