const Connect =require('../config/connect')
const knex = new Connect().knex;
const KnexRepository=require('./repository');
const Product=require('../Model/Product')
const Product01=new Product();
module.exports=class Product extends KnexRepository{
    constructor(){
        super(Product01.tableName)
    }
    searchbypriceBetween(sart,end){
        return knex(this.tableName).whereBetween('Money', [sart,end]).orderBy('updatedDate', 'desc')
            .select()
    }
    searchbyprice(price){
        return knex(this.tableName).where('Money','>=',price).orderBy('updatedDate', 'desc')
        .select()
    }
    searchbyname(name){
        return knex(this.tableName).whereLike('ProductName',`%${name}%`).orderBy('updatedDate', 'desc')
        .select()
    }
    searchbycategory(category){
        return knex(this.tableName).where(knex.raw(category)).orderBy('updatedDate', 'desc')
        .select()
    }
    searchbypriceBetween(sart,end,page){
        return knex(this.tableName).whereBetween('Money', [sart,end]).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
            .select()
    }
    searchbyprice(price,page){
        return knex(this.tableName).where('Money','>=',price).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
        .select()
    }
    searchbyname(name,page){
        return knex(this.tableName).whereLike('ProductName',`%${name}%`).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
        .select()
    }
    searchbycategory(category,page){
        return knex(this.tableName).where(knex.raw(category)).orderBy('updatedDate', 'desc').limit(10).offset(page*10)
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