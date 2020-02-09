const express = require('express');
const router = express.Router();
global.fetch = require('node-fetch');
const authCheck = require('../cognito/cognitoLogin');
const logoutCheck = require('../cognito/cognitoLogout');
const memRegist = require('../cognito/cognitoSignUp');





// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  console.log(req.body);

  var email = req.body.email
  var name = req.body.name
  var password = req.body.password



  var registerMember = memRegist.regist(email,name,password,function(result){

        console.log('registerMember result : ' + JSON.stringify(result))

        res.render('welcome', {
            //results: JSON.stringify(results)
            results : result
        });


  });



});

// Login
router.post('/login', (req, res, next) => {


  console.log('req :  ' + JSON.stringify(req.query));
  var userName = req.body.email;
  var password = req.body.password;

//  console.log('session  : ' +  JSON.stringify(req.session));
//  console.log('userName : ' +  userName)
//  console.log('password : ' +  password)

  if ((req.session.authToken!= null) && (req.session.authToken.userName == userName)) {

    console.log('Already login..');
    console.log('token : ' + JSON.stringify(req.session.authToken));
    res.redirect('/list');

  } else {

    var authCheckResult = authCheck.login(userName, password,function(result){


      if(result.result =='success')
      {
        console.log('result.result : ' + result.result);
        req.session.authToken = {
          jwtToken : result.token,
          authorized: true,
          userName : userName
        };
        console.log(req.session);
        res.redirect('/list');
      }
      else
      {
        console.log('res.redirect(/)');
        res.render('welcome', {
            results : result
        });
      }

    });

  } // else
  console.log(req.body);
});

// Logout
router.get('/logout', (req, res) => {
   var userName = req.session.authToken.userName;
   var logoutResult = logoutCheck.logout(userName, function(result){
   });
   req.session.destroy(function(err){
     if(err) { throw err;}
     console.log('logout !!!!!!1')
    // res.redirect('/');

     res.render('welcome',{ results : {} });


    });

});

module.exports = router;
