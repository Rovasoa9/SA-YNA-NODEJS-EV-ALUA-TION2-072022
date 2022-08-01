const mysql = require('mysql') ;    //connection de la base de donnee avec node js

// creation de la connection de la database
const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  pass: process.env.MYSQLPASS,
  port: process.env.MYSQLPORT,
  database: process.env.MYSQLDATABASE
});
module.exports = connection ;