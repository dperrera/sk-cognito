import { SvelteKitAuth } from '$lib/dp-auth';
import { OAuth2Provider } from '$lib/dp-auth/providers';

// export const csr = false;

// this is the domain we set up in our Cognito Pool
const DOMAIN = 'dan.auth.us-east-1.amazoncognito.com';

const oauthProvider = new OAuth2Provider({
	id: 'cognito',
	accessTokenUrl: `https://${DOMAIN}/oauth2/token`,
	profileUrl: `https://${DOMAIN}/oauth2/userInfo`,
	authorizationUrl: `https://${DOMAIN}/oauth2/authorize`,
	// redirect: 'http://localhost:5173/',
	clientId: '3faftqe9ja2ckis27085u0fvfl',
	clientSecret: '1enr5j2v0nnoid523ka9f841qq11jqg7frl5qvjca87b8mpc7u9r',
	scope: ['openid', 'email', 'profile'],
	contentType: 'application/x-www-form-urlencoded'
	// responseType: 'code'
	// profile(profile, tokens) {
	// 	console.log('in da profile', { profile, tokens });
	// 	return {
	// 		...profile,
	// 		access_token: tokens.access_token,
	// 		id_token: tokens.id_token,
	// 		refresh_token: tokens.refresh_token,
	// 		provider: 'cognito'
	// 	};
	// }
});

// exposing our auth object
export const appAuth = new SvelteKitAuth({
	providers: [oauthProvider]
});

export const { GET, POST } = appAuth;
