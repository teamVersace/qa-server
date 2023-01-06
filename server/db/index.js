require('dotenv').config();
const pg = require('pg');
// const Promise = require('bluebird');

const connection = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
};

const pool = new pg.Pool(connection);

module.exports = pool;
