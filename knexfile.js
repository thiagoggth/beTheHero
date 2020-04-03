// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite',
    },
    migrations: {
      directory: './src/database/migrations/',
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'dfn7c22rbduf6e',
      user: 'fmcasggpbstpyr',
      password: '0fcbc63f4fb9e40c83408d7cd91a62c7445600db2fd1bc72f413c2ada7dca827'
    },
    migrations: {
      directory: __dirname + '/src/database/migrations/',
    }
  }

};
