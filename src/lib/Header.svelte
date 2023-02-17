<script>
	import {
		AppShell,
		AppBar,
		AppRail,
		AppRailTile,
		LightSwitch,
		drawerStore
	} from '@skeletonlabs/skeleton';

	import { onMount } from 'svelte';
	import { token, username, url, api_version } from '../store/store.js';
    import { base } from '$app/paths';

	onMount(async () => {
		token.useLocalStorage();
		url.useLocalStorage();
		username.useLocalStorage();
		api_version.useLocalStorage();
	});

	function logout() {
		token.set('');
		username.set('');
	}
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div>
			<h3 class="text-secondary-700 dark:text-white font-bold text-2xl dark:font">
				Curation Support Tool
			</h3>
			<br />
			<h5 class="text-secondary-700 dark:text-white font-bold text-2xl dark:font">
				<em>v0.1beta</em>
			</h5>
		</div>
	</svelte:fragment>
	<svelte:fragment>
		{#if $url != ''}
			<h3 class="text-center">
				{$url} v{#if $api_version != '-1'}{$api_version}{:else} not supported version{/if}
			</h3>
		{:else}
			<h3 class="text-red-500 text-center">
				BEXIS2 Instance not set!
				<a
					href="{base + '/settings'}"
					class="btn bg-primary-500 rounded-md text-white"
					data-sveltekit-preload-data="hover">Set</a
				>
			</h3>
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<h3>{$username}</h3>
		{#if $token != ''}
			<label>
				<button class="btn bg-primary-500 rounded-md" on:click={logout}>Logout</button>
			</label>
		{:else}
			<a href="{base + '/settings'}" class="btn bg-primary-500 rounded-md" data-sveltekit-preload-data="hover"
				>Login</a
			>
		{/if}
		<LightSwitch mode="dark" />
	</svelte:fragment>
</AppBar>
