const Connect =require('../config/connect')
const knex = new Connect().knex;
module.exports=class KnexRepository{
    constructor(
        tableName
    ) { this.tableName = tableName; }

    delete(id){
        return knex(this.tableName)
            .where('id', id)
            .del()
    }

    findAll() {
        return knex(this.tableName).orderBy('updatedDate', 'desc')
            .select()
    }

    create(item){
        return knex(this.tableName)
            .insert(item)
    }
    update(id,item){
        return knex(this.tableName)
            .where('id', '=', id)
            .update(item)
    }
    findOne(id) {
        return knex(this.tableName)
            .where({
                id: id
            })
            .select()
    }
    findItem(item) {
        return knex(this.tableName)
            .where(item).orderBy('updatedDate', 'desc')
            .select()
    }

    
}