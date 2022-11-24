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

{#if !user}
	<form method="POST">
		<input name="email" type="email" />
		<input name="password" type="password" />
		<button>Log in</button>
	</form>
{:else}
	<h2>Welcome {user.email}!</h2>
	<p>Your username is {user.username} and your email has been verified: {user.email_verified}</p>
	<button on:click={signOut}>Log Out</button>
{/if}
