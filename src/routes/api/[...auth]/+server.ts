// we're importing our auth object
import { appAuth } from '$lib/auth';
// export const { get: GET, post: POST } = appAuth;

import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (req) => {
	console.log(appAuth.get);
	const x = await appAuth.get(req);

	console.log(x);

	return new Response(JSON.stringify(x, null, 2));
};
