<script lang="ts">
	import { signOut as authSignOut } from 'sk-auth/client';
	import { page } from '$app/stores';

	$: user = $page.data.user;

	function signOut() {
		authSignOut().then(() => ($page.data.user = null));
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button
	on:click={() => {
		console.log('hey');
	}}>eh</button
>

{#if !user}
	<a
		href="https://dan.auth.us-east-1.amazoncognito.com/login?client_id=7r862tpdgjh9vvka9mjuffllj0&response_type=code&scope=email+openid&redirect_uri=http://http://127.0.0.1:5173/"
		>Sign in</a
	>
{:else}
	<h2>Welcome {user.email}!</h2>
	<p>Your username is {user.username} and your email has been verified: {user.email_verified}</p>
	<button on:click={signOut}>Log Out</button>
{/if}
