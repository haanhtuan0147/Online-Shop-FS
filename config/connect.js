module.exports= class Connect {
     knex = require('knex')({
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'onlineshopfs',
            charset: 'utf8',
            timezone: 'UTC',
        },
        useNullAsDefault: true
    })
}
