

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

        //const email = "kilhan@amazon.com"
        const email = "coolnsmile@naver.com"
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


        console.log(email + ' ' + password)
        console.log(cognitoUser)

        var returnData = {}



        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                console.log('++++++++++++++++++++++++++++++++++++++')
                console.log('success result : ' + JSON.stringify(result));

                returnData = { 'result' : 'success' , 'token' : result.getIdToken().getJwtToken()};

                console.log('----------- check1  -------------')
                console.log('accessToken : ' + result.getAccessToken().getJwtToken() )

		var params = {
		  AccessToken: result.getAccessToken().getJwtToken()
		};
		cognito.getUser(params, function(err, data) {
		  if (err) {
		     console.log('error:' + err.stack)
		   }
		  else{ 
		    console.log('cognito.getUser result : '+ JSON.stringify(data));           // successful response
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
                                                           

