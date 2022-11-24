export const csr = false;

import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
	AuthenticationDetails
} from 'amazon-cognito-identity-js';

// const userPool = new CognitoUserPool({
// 	UserPoolId: 'us-east-1_vyDyKeY2i', // Your user pool id here
// 	ClientId: '7r862tpdgjh9vvka9mjuffllj0' // Your client id here
// });

// const attributeList = [];

// const dataEmail = {
// 	Name: 'email',
// 	Value: 'dan@perrera.com'
// };

// // const dataPhoneNumber = {
// // 	Name: 'phone_number',
// // 	Value: '+15555555555'
// // };
// const attributeEmail = new CognitoUserAttribute(dataEmail);
// // const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);

// attributeList.push(attributeEmail);
// // attributeList.push(attributePhoneNumber);

// const cognitoUser = new CognitoUser({
// 	Username: 'dan@perrera.com',
// 	Pool: userPool
// });

// console.log('====================================');
// console.log(cognitoUser);
// console.log('====================================');

// // userPool.signUp('dan@perrera.com', 'password', attributeList, null, function (err, result) {
// // 	if (err) {
// // 		console.log(err.message || JSON.stringify(err));
// // 		return;
// // 	}
// // 	const cognitoUser = result.user;
// // 	console.log('user name is ' + cognitoUser.getUsername());
// // });

const authenticationData = {
	Username: 'dan@perrera.com',
	Password: ''
};
const authenticationDetails = new AuthenticationDetails(authenticationData);
const userPool = new CognitoUserPool({
	UserPoolId: 'us-east-1_vyDyKeY2i', // Your user pool id here
	ClientId: '7r862tpdgjh9vvka9mjuffllj0' // Your client id here
});
const userData = {
	Username: 'dan@perrera.com',
	Pool: userPool
};
const cognitoUser = new CognitoUser(userData);
cognitoUser.authenticateUser(authenticationDetails, {
	onSuccess: function (result) {
		const accessToken = result.getAccessToken().getJwtToken();

		console.log('====================================');
		console.log(accessToken);
		console.log('====================================');

		// //POTENTIAL: Region needs to be set if not already set previously elsewhere.
		// AWS.config.region = '<region>';

		// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		// 	IdentityPoolId: '...', // your identity pool id here
		// 	Logins: {
		// 		// Change the key below according to the specific region your user pool is in.
		// 		'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result
		// 			.getIdToken()
		// 			.getJwtToken(),
		// 	},
		// });

		// //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
		// AWS.config.credentials.refresh(error => {
		// 	if (error) {
		// 		console.error(error);
		// 	} else {
		// 		// Instantiate aws sdk service objects now that the credentials have been updated.
		// 		// example: const s3 = new AWS.S3();
		// 		console.log('Successfully logged!');
		// 	}
		// });
	},

	onFailure: function (err) {
		alert(err.message || JSON.stringify(err));
	}
});
