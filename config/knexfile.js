
module.exports = {
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "onlineshopfs",
    timezone: 'UTC',
  },
  migrations: {
    file: __dirname + '/migrations'
  },
  seeds: {
    file: __dirname + '/seeds'
  },
  useNullAsDefault: true
};
