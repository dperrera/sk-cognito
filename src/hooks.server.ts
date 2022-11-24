import type { Handle } from '@sveltejs/kit';
import { appAuth } from '$lib/server/auth';

// export const handle: Handle = async ({ event, resolve }) => {
// 	appAuth.(event);
// 	// TODO https://github.com/sveltejs/kit/issues/1046

// 	// if (event.request.query.has("_method")) {
// 	//   event.request.method = event.request.query.get("_method").toUpperCase();
// 	// }

// 	const response = await resolve(event);

// 	console.log('====================================');
// 	// console.log('response', response);
// 	console.log('====================================');
// 	return response;
// };

export const { getSession } = appAuth;
