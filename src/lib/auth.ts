import { SvelteKitAuth } from 'sk-auth';
import { OAuth2Provider } from 'sk-auth/providers';

export const csr = false;

// this is the domain we set up in our Cognito Pool
const DOMAIN = 'dan.auth.us-east-1.amazoncognito.com';

const oauthProvider = new OAuth2Provider({
	id: 'cognito',
	accessTokenUrl: `https://${DOMAIN}/oauth2/token`,
	profileUrl: `https://${DOMAIN}/oauth2/userInfo`,
	authorizationUrl: `https://${DOMAIN}/oauth2/authorize`,
	redirect: 'http://localhost:5173',
	clientId: '7r862tpdgjh9vvka9mjuffllj0',
	clientSecret: '',
	scope: ['openid', 'email'],
	contentType: 'application/x-www-form-urlencoded',
	responseType: 'code',
	profile(profile, tokens) {
		return {
			...profile,
			access_token: tokens.access_token,
			id_token: tokens.id_token,
			refresh_token: tokens.refresh_token,
			provider: 'cognito'
		};
	}
});

// exposing our auth object
export const appAuth = new SvelteKitAuth({
	providers: [oauthProvider]
});

export const { get, post } = appAuth;
