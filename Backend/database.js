const mysql = require('mysql2');

const pooldb = mysql.createPool({
    host: process.env.DB_HOST || 'localhost', // Ensure this is set correctly
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }).promise();
  

module.exports = pooldb;
  