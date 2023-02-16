<script>
	import { get_version } from '$lib/utils/utils.js';
	import { onMount } from 'svelte';
	import { token, username, url, datasets_result, api_version } from '../../store/store.js';

	let url_ = '';

	let password_ = '';
	let username_ = '';
	let failed = false;
	//login();

	let headersList = {
		Accept: 'application/json',
		Authorization: 'Bearer ' + $token,
		'Content-Type': 'application/json'
	};

	onMount(async () => {
		token.useLocalStorage();
		url.useLocalStorage();
		username.useLocalStorage();
		url_ = $url.toString();
	});

	async function login() {
		failed = false;
		let headersList = {
			Accept: '*/*',
			'User-Agent': '*',
			Authorization: 'Basic ' + btoa(username_ + ':' + password_)
		};

		let response = await fetch($url + '/api/Token', {
			method: 'GET',
			headers: headersList
		});

		if (response.status == 200) {
			let data = await response.json();
			console.log(data);

			token.set(data['token']);
			username.set(username_);
		} else {
			failed = true;
		}
	}

	function logout() {
		token.set('');
		username.set('');
	}

	async function setUrl() {
		url.set(url_);
		datasets_result.set([]); // unset cached values
		const version = await get_version(headersList, $url.toString());
		api_version.set(version);
	}

	const onKeyPress = (/** @type {{ charCode: number; }} */ e) => {
		if (e.charCode === 13) login();
	};
</script>

<main class="p-4">
	<label class="input-label w-[380px]">
		<span>BEXIS2 Instance URL (e.g. https://www.bexis.uni-jena.de)</span><br />
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-md w-[500px]">
			<input class="w-96" type="text" id="name" bind:value={url_} required />
			<button class="bg-primary-500" on:click={setUrl}>Set</button>
		</div>
	</label>
	<br /><br />
	{#if $token == ''}
		{#if failed == true}
			<span class="text-red-500">Login failed!</span>
		{/if}

		<label class="input-label">
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-md w-[500px]">
				<input
					type="text"
					placeholder="Username"
					id="name"
					bind:value={username_}
					minlength="2"
					required
				/>
				<input
					type="password"
					placeholder="Password"
					id="password_compare"
					bind:value={password_}
					on:keypress={onKeyPress}
					minlength="2"
					required
				/>
				<button class="bg-primary-500" on:click={login}>Login</button>
			</div>
		</label>
	{:else}
		{#if $username && $token}
			Logged in as: {$username}
		{/if}

		<label>
			<button class="btn bg-primary-500 rounded-md" on:click={logout}>Logout</button>
		</label>
	{/if}
</main>
