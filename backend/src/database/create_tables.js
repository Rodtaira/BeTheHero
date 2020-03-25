const options = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'rodtaira',
        password: 'popo123',
        database: 'BeTheHero_DB'
    }
}

const knex = require('knex')(options);

knex.schema.createTable('ongs', (table) => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('phone_number')
    table.string('uf')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });