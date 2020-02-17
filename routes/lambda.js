const express = require('express');
const router = express.Router();
global.fetch = require('node-fetch');
const authCheck = require('../cognito/cognitoLogin');
const logoutCheck = require('../cognito/cognitoLogout');
const memRegist = require('../cognito/cognitoSignUp');
const mysql = require('mysql');
const AWS = require('aws-sdk');
var config  = require('../config.json');

//Create Connection
const conn = mysql.createConnection({
    host: config.rds_host,
    user: config.rds_user,
    password: config.rds_password,
    database: config.rds_database
});

//connect to database

//conn.connect((err) => {
 //   if (err) throw err;
  //  console.log('Mysql Connected...');
//});





// Login Page
router.get('/s3list', (req, res) => {
  console.log('req.query : ' +  JSON.stringify(req.query) );

  res.json({})


 });


module.exports = router;
