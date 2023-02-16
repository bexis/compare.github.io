<script>
	import { diffChars } from 'diff';
	// @todo: add 2nd option to compare based on metadata JSON between datasets and/or versions example: https://www.bexis.uni-jena.de/api/Metadata/31402 (versions will come in 2.17 ...{id}/{versinId})
	// compare "#text" (if given partyid as well) one as base -> compare to x datasets OR all versions (versions newest, newest-1, newest-2 until version 1)

	// @todo: read dataset ids & versions from list
	let ds_version_ids_endpoint = 'https://www.bexis.uni-jena.de/api/Dataset';

	//fetch_datasets(); // @todo: allow to change base url (instance API) default always https://www.bexis.uni-jena.de/

	async function fetch_datasets() {
		const response = await fetch(ds_version_ids_endpoint, {
			method: 'GET'
		});
		const data = await response.json();
		console.log(data);
		return data;
	}

	// should work in 2.17 without token for DatasetVersionIdsInclude (currently only for datasets -> DatasetIdsInclude)
	let token = '';

	let headersList = {
		Accept: '*/*',
		Authorization: 'Bearer ' + token,
		'Content-Type': 'application/json'
	};

	let bodyContent = '';

	let endpoint = 'https://www.bexis.uni-jena.de/api/MetadataStatistic';
	let host = 'https://www.bexis.uni-jena.de';
	//this is the id of a dataset
	//	let id = 5764;

	let showId = 0;
	let v_id_1 = 9547; //9519;
	let v_id_2 = 9836; //9632;
	let xpath =
		'Metadata/methods/methodsType/studyDesign/studyDesignType/detailedDescriptionOfStudyDesign/'; //"Metadata//general/generalType/DOI/DOIType/"
	/**
	 * @type {{ [x: string]: { data: any; }; }}
	 */
	let data1;
	/**
	 * @type {{ [x: string]: { data: any; }; }}
	 */
	let data2;
	/**
	 * @type {any[]}
	 */
	let result1 = [];
	/**
	 * @type {any[]}
	 */
	let result2 = [];
	/**
	 * @type {string | any[]}
	 */
	let diff = [];

	/**
	 * @param {string} bodyContent
	 */
	async function fetch_data(bodyContent) {
		const response = await fetch(endpoint, {
			method: 'POST',
			body: bodyContent,
			headers: headersList
		});
		const data = await response.json();

		console.log(result2);
		return data;
	}

	async function getDiff() {
		result1 = [];
		result2 = [];
		headersList = {
			Accept: '*/*',
			Authorization: 'Bearer ' + token,
			'Content-Type': 'application/json'
		};
		bodyContent = JSON.stringify({
			Xpath: xpath,
			DatasetVersionIdsInclude: ['' + v_id_1 + '']
		});
		data1 = await fetch_data(bodyContent);
		for (let key in data1) {
			result1 = [...result1, { id: key, value: data1[key].data }];
		}
		bodyContent = JSON.stringify({
			Xpath: xpath,
			DatasetVersionIdsInclude: ['' + v_id_2 + '']
		});
		data2 = await fetch_data(bodyContent);
		for (let key in data2) {
			result2 = [...result2, { id: key, value: data2[key].data }];
		}

		diff = diffChars(result1[0].id, result2[0].id);
		console.log(diff);
	}
</script>

<main class="p-4">
	<h2 class="pt-4 pb-4 text-secondary-700 dark:text-white">Check fields across all datasets!</h2>

	<p>Coming soon ;-)</p>
</main>

<!--
<h1>test</h1>
<main>
	<div>
		Xpath: <input bind:value={xpath} />
		VersionID_1: <input bind:value={v_id_1} />
		VersionID_2: <input bind:value={v_id_2} />
		Token: <input bind:value={token} />
		URL: <input bind:value={host} />
		<button on:click={getDiff}>Show Diff</button>
	</div>

	{#if data1}
		{#each result1 as item}
			{item.id}
		{/each}
	{/if}
	<br /><br />
	{#if data2}
		{#each result2 as item}
			{item.id}
		{/each}
	{/if}
	<br /><br />
	{#if diff.length > 0}
		{#each diff as item}
			<span
				style="background-color:{item.added
					? '#90ee9061'
					: item.removed
					? '#ff000038'
					: 'white'}; color:{item.added ? 'green' : item.removed ? 'red' : 'gray'}"
				>{item.value}</span
			>
		{/each}
	{/if}

	<pre id="display" />
</main>
-->
