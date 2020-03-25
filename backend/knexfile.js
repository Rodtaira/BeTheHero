// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'rodtaira',
      password: 'popo123',
      database: 'BeTheHero_DB'
    },
    migrations: {
      directory: './src/database/migrations'
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'BeTheHero_DB',
      user:     'rodtaira',
      password: 'popo123'
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
