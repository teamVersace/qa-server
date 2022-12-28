require('dotenv').config();
var pg = require('pg');
const Promise = require('bluebird');

// var connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.PORT}/${process.env.DB_DATABASE}`;

const connection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

var pool = new pg.Pool(connection);

module.exports = pool;