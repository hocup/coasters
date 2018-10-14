#!/usr/bin/env node
"use strict";

const express = require('express')
const app = express()
const port = 3019
const mysql = require('mysql2');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const dbHost = process.env.COASTERS_DB_HOST ? process.env.COASTERS_DB_HOST : "localhost";
const dbUser = process.env.COASTERS_DB_UNAME ? process.env.COASTERS_DB_UNAME : "root";
const dbPwd = process.env.COASTERS_DB_PWD ? process.env.COASTERS_DB_PWD : "root";
const dbDatabase = process.env.COASTERS_DB_DB ? process.env.COASTERS_DB_DB : "coasters_db";

const pool = mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPwd,
  database: dbDatabase,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Make sure the tables exist
pool.query(
  `CREATE TABLE IF NOT EXISTS \`coasters_db\`.\`emails\` (
    \`id\` INT NOT NULL AUTO_INCREMENT,
    \`email\` VARCHAR(450) NULL,
    \`ip\` VARCHAR(450) NULL,
    \`cre_date\` DATETIME NULL DEFAULT NOW(),
    PRIMARY KEY (\`id\`));
  `, (err, results, fields) => {
    if(!err) {
      console.log("Emails table good to go");
    } else {
      console.log("Had an error creating emails table: ", err);
    }
  }
);

pool.query(
  `
  CREATE TABLE IF NOT EXISTS \`coasters_db\`.\`rulesets\` (
    \`id\` INT NOT NULL AUTO_INCREMENT,
    \`url\` VARCHAR(120) NULL,
    \`name\` VARCHAR(120) NULL,
    \`website\` VARCHAR(240) NULL,
    \`website_approved\` TINYINT NULL,
    \`game_name\` VARCHAR(400) NULL,
    \`desc\` VARCHAR(400) NULL,
    \`rules\` VARCHAR(10000) NULL,
    \`email\` VARCHAR(450) NULL,
    PRIMARY KEY (\`id\`));
  `, (err, results, fields) => {
    if(!err) {
      console.log("Rulesets table good to go");
    } else {
      console.log("Had an error creating rulesets table: ", err);
    }
  }
)

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


app.use(express.static('../frontend'));
// app.get('/', (req, res) => res.send('Hello World!'));

app.post('/email', (req, res) => {

  console.log("GOT A REQUEST", req.body);
  console.log("GOT A REQUEST", req.params);
  // TODO: Split out the db+validation stuff into its own file

  const email = req.body.email;

  if(email) {
    pool.query(
      `INSERT INTO \`emails\` (email, cre_date) VALUES (?, NOW());`, 
      [email], 
      (err, results) => {
        res.send("bloop");
      });
  } else {
    res.send("could not get email from request, oops")
  }
});

app.post('/api/rules', (req, res) => {
  // TODO: Add new rules!
  
  const name = req.body.name;
  const email = req.body.email;
  const website = req.body.website;

  const game_name = req.body.game_name;
  const desc = req.body.desc;
  const rules = req.body.rules;



  pool.query(
    `
      INSERT INTO rulesets (
        \`name\`,
        \`email\`,
        \`website\`,
        \`game_name\`,
        \`desc\`,
        \`rules\`,
        \`website_approved\`,
        \`url\`
      ) VALUES (
        ?,?,?,?,?,?,?,?
      );
    `,[name, email,website,game_name,desc,rules, false, "potato"] ,(err, result) => {
      if(err) {
        res.status(500);
        res.send("Database error has prevented the request from completing");
      } else {
        res.send("OH BOY, RULES ADDED");
        // res.redirect('/rules/?ruleset=' + url);
      }
    }
  );
  
});

app.get('/api/rules', (req, res) => {
  // TODO: Get list of rules
  pool.query(
    /*
     \`id\` INT NOT NULL AUTO_INCREMENT,
    \`url\` VARCHAR(120) NULL,
    \`name\` VARCHAR(120) NULL,
    \`website\` VARCHAR(240) NULL,
    \`website_approved\` TINYINT NULL,
    \`game_name\` VARCHAR(400) NULL,
    \`desc\` VARCHAR(400) NULL,
    \`rules\` VARCHAR(10000) NULL,
    \`email\` VARCHAR(450) NULL,
    */

    `SELECT \`name\`, \`url\`, \`website\`, \`website_approved\`, \`game_name\`, \`desc\`, \`email\` FROM \`rulesets\`;`,(err, result) => {
      if(err) {
        console.log(err);
        res.send("oh no");
      } else {
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.send(JSON.stringify(result));
      }
    }
  )
});

app.get('/api/rules/:rulesetid', (req, res) => {
  // TODO: Get specific ruleset
});

app.listen(port, () => console.log(`Coaster app listening on port ${port}!`))