const express = require('express')
const app = express()
const port = 3019
const mysql = require('mysql2');

const dbHost = process.env.COASTERS_DB_HOST ? process.env.COASTERS_DB_HOST : "localhost";
const dbUser = process.env.COASTERS_DB_UNAME ? process.env.COASTERS_DB_UNAME : "root";
const dbPwd = process.env.COASTERS_DB_PWD ? process.env.COASTERS_DB_PWD : "root";
const dbDatabase = process.env.COASTERS_DB_PWD ? process.env.COASTERS_DB_PWD : "coasters_db";

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPwd,
  database: dbDatabase
});

// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//       console.log(err);
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//       console.log(err);
//     console.log(results);
//   }
// );

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))