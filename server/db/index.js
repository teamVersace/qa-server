require('dotenv').config();
var pg = require('pg');
const Promise = require('bluebird');

const connection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

var pool = new pg.Pool(connection);

module.exports = pool;