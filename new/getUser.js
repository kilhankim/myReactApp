

	var aws = require('aws-sdk');
	aws.config.update({
	    region: 'ap-northeast-2',
	    credentials: new aws.CognitoIdentityCredentials({
		IdentityPoolId: 'ap-northeast-2:0f483cf4-89dc-43c8-b851-3ac486938253'
	    })
	});
	var cognito = new aws.CognitoIdentityServiceProvider();



        const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
        const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
        const AWS = require('aws-sdk');
        const request = require('request');
        global.fetch = require('node-fetch');

        const email = "coolnsmile@naver.com"
//        const email = "coolnsmile@naver.com"
        const password = '123456'

        const poolData = {
          UserPoolId : 'ap-northeast-2_ywvJEnETc',
          ClientId :'58f12rqlkhdao08gnbih7f6kdo'
        };
        const pool_region = 'ap-northeast-2';

        const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username : email,
            Password : password
        });

        var userData = {
            Username : email,
            Pool : userPool
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);


        console.log('Numnber 1 : ' + email + ' ' + password)
        //console.log(cognitoUser)

        var returnData = {}



        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
           //     console.log('++++++++++++++++++++++++++++++++++++++')
                console.log('No1 authenticateUser request : ' + JSON.stringify(authenticationDetails))
                console.log('No2 result : ' + JSON.stringify(result));

                returnData = { 'result' : 'success' , 'token' : result.getIdToken().getJwtToken()};

             //   console.log('----------- check1  -------------')
              //  console.log('accessToken : ' + result.getAccessToken().getJwtToken() )

		var params = {
		  AccessToken: result.getAccessToken().getJwtToken()
		};
		cognito.getUser(params, function(err, data) {
		  if (err) {
		     console.log('error:' + err.stack)
		   }
		  else{ 
               //     console.log('-------------cognito.getUser-----------')
		//    console.log('cognito.getUser result : '+ JSON.stringify(data));           // successful response
		  }
		});


	   AWS.config.region = 'ap-northeast-2'; // Region
	   AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	      IdentityPoolId: 'ap-northeast-2:0f483cf4-89dc-43c8-b851-3ac486938253',
	      Logins: {
		'cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_ywvJEnETc' : result.getIdToken().getJwtToken()
	      }
	    });
            console.log('No3 request : IdentityPoolId : ap-northeast-2:0f483cf4-89dc-43c8-b851-3ac486938253 ')
            console.log('No3 request : Logins : cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_ywvJEnETc : result.getIdToken().getJwtToken()')
            console.log('No4 result AWS.config.credentials : ' + JSON.stringify(AWS.config.credentials))

//	    console.log('credentials : ' + JSON.stringify(AWS.config));
	    var s3 = new AWS.S3();
	    var params = {};


	    s3.listBuckets(params, function(err, data) {
	      if (err){ console.log('s3.listbucket error : ' + err)}
	      else {
                console.log('++++++++++++ Bucket List +++++++++++++++')
                console.log('bucket list : ' + JSON.stringify(data.Buckets))
                console.log('++++++++++++ Bucket List +++++++++++++++')
	      }
	    });



            //    callback(returnData);

            }, //onSuccess
            onFailure: function(err) {
                returnData = { 'result' : 'fail' , 'error' : err}

                console.log('err : ' + JSON.stringify(err));
                console.log('length : ' + Object.keys(err).length);
                if(Object.keys(err).length>0)
                {
                   console.log('returnData2 : ' + JSON.stringify(returnData));
                   console.log('err is not null')
                   callback(returnData);
                }
            },

        });
                                                           

