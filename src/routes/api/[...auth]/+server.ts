// we're importing our auth object
import { appAuth } from '$lib/auth';
// export const { get: GET, post: POST } = appAuth;

import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	// console.log(appAuth.get);
	console.log(new URL(event.url));

	const x = await appAuth.get({ url: new URL(event.url), ...event.request });

	console.log(x);

	return new Response(JSON.stringify(x, null, 2));
};
