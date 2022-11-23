// we're importing our auth object
import { appAuth } from '$lib/auth';
export const { GET, POST } = appAuth;

// import { error } from '@sveltejs/kit';
// import type { RequestHandler } from './$types';

// export const GET: RequestHandler = async (event) => {
// 	// const { get: GET, post: POST } = appAuth;

// 	// console.log(appAuth.get);
// 	// console.log(new URL(event.url));

// 	// const x = await appAuth.get(event);

// 	// console.log(x);

// 	return new Response('hello world');
// 	// return new Response(JSON.stringify(x, null, 2));
// };
