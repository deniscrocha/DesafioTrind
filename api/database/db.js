const  dotenv = require('dotenv');
dotenv.config();

const knex = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS
    },
});

module.exports = knex;