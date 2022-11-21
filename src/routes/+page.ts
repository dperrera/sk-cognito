import { SvelteKitAuth, Providers } from 'sk-auth';

export const csr = false;

// this is the domain we set up in our Cognito Pool
const DOMAIN = 'dan.auth.us-east-1.amazoncognito.com';

// these are the configuration seetings for our OAUTH2 provider
const config = {
	accessTokenUrl: `https://${DOMAIN}/oauth2/token`,
	profileUrl: `https://${DOMAIN}/oauth2/userInfo`,
	authorizationUrl: `https://${DOMAIN}/oauth2/authorize`,
	redirect: 'https://perrera.com',
	clientId: '7r862tpdgjh9vvka9mjuffllj0',
	clientSecret: '',
	scope: ['openid', 'email'],
	id: 'cognito', // IMPORTANT: this is the id that we'll use to identify our provider
	contentType: 'application/x-www-form-urlencoded'
};

const oauthProvider = new Providers.OAuth2Provider(config);

// exposing our auth object
export const appAuth = new SvelteKitAuth({
	providers: [oauthProvider]
});

export const { get, post, getSession } = appAuth;

console.log(appAuth);
