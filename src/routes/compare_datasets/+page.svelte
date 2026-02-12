F2.1<script>
	import { diffChars } from 'diff';
	import { onMount } from 'svelte';
	import {
		datasets_result,
		datasets_result_date,
		table_content,
		url,
		token,
		api_version
	} from '../../store/store';
	import ShowDiff from '$lib/components/ShowDiff.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';
	import { get_version, fetch_datasets } from '$lib/utils/utils';
	import { restructure_all_metadata } from './compare_datasets';

	let headersList = {
		Accept: 'application/json',
		Authorization: 'Bearer ' + $token,
		'Content-Type': 'application/json'
	};

	let bodyContent = '';

	let loading = false;
	$: props = { value: 50, max: 100, step: 10 };

	/**
	 * @type {any[]}
	 */
	$: cur_dataset_ids = [];

	/**
	 * @type {any[]}
	 */
	$: cur_version_ids = [];

	/**
	 * @type {any[] | string}
	 */
	let ds_test;
	datasets_result.subscribe((value) => {
		ds_test = value;
		// console.log(typeof ds_test);
	});

	onMount(async () => {
		datasets_result.useLocalStorage();
		url.useLocalStorage();
		token.useLocalStorage();
		api_version.useLocalStorage();

		if (ds_test.length == 0) {
			update_cache();
		}

		const version = await get_version(headersList, $url.toString());
		api_version.set(version);
	});

	let endpoint = $url + '/api/MetadataStatistic';
	let endpoint_metadata = $url + '/api/Metadata/';
	let ds_version_ids_endpoint = $url + '/api/Dataset';

	//this is the id of a dataset
	//	let id = 5764;

	let showId = 0;

	// Beispiel-IDs:
	//
	let v_id_1 = 9519; //9519;9547
	let v_id_2 = 9632; //9632;9836

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
	 * @type {any[]}
	 */
	let tablecontent = [];
	// let tablecontent = writable([]);

	/**
	 * @type {never[] | import("svelte/store").Readable<any[]>}
	 */
	let data = [];

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

		return data;
	}

	async function update_cache() {
		loading = true;
		const result = await fetch_datasets(ds_version_ids_endpoint);
		datasets_result.set(result);
		datasets_result_date.set(new Date().toDateString());
		loading = false;
	}

	/**
	 * @param {number} dataset_id
	 * @param {number} [version_id]
	 */
	async function fetch_metadata(dataset_id, version_id) {
		console.log('Fetching metadata for dataset_id: ', dataset_id, version_id);
		let url_metadata_api = '';
		if ($api_version == '2.16') {
			url_metadata_api = endpoint_metadata + '/' + dataset_id;
		}
		if ($api_version == '2.17' ) {
			url_metadata_api = endpoint_metadata + '/' + dataset_id + '/' + version_id;
		}
		else {
			url_metadata_api = endpoint_metadata + '/' + dataset_id + '/version_number/' + version_id;
		}

		const response = await fetch(url_metadata_api, {
			method: 'GET',
			headers: headersList
		});
		// console.log(response)
		const data = await response.json();

		return data;
	}

	/**
	 * @param {any[]} content
	 */
	function build_table_content(content) {
		tablecontent = [];
		let row_count = content.length;
		//let col_count = content[0].length;
		// console.log("CONTENT: \n", content)
		for (var r = 0; r < row_count; r++) {
			let new_table_row = { section: content[r][0] };
			for (var c = 1; c < content[r].length; c++) {
				let row_content = {};
				row_content.diff = {};
				//	row_content.orig = "";
				row_content.orig = content[r][c];
				if (c > 0) {
					let diff = diffChars(content[r][c], content[r][1]);
					// console.log("Comparing: \n", content[0][c][1], "\n", content[index][c][1])
					// console.log(diff)
					//row_content = build_diff_html_cell(row_content, diff)
					//diff["orig"] = content[r][c]
					row_content.diff = diff;
					console.log(row_content);
				}
				new_table_row['col' + c] = row_content;
			}
			// console.log(new_table_row)
			// @ts-ignore
			//console.log(tablecontent)
			tablecontent.push(new_table_row);
		}
		//tablecontent = tablecontent
		loading = false;
		table_content.set(tablecontent);
		add_columns(tablecontent);
	}

	async function calc_and_show_diff() {
		loading = true;
		// fetch and push all dataset_ids into results
		let results = [];

		console.log('Fetching metadata...');
		for (var i = 0; i < cur_dataset_ids.length; i++) {
			let id = ds_test[cur_dataset_ids[i]]['Id'];
			let version = cur_version_ids[i];
			// @ts-ignore
			let dsv = ds_test.find((item) => item['Id'] === id);
			// @ts-ignore
			let version_number = dsv['Versions'].find(
				(/** @type {{ id: any; }} */ item) => item['Id'] === version
			);
			let data = await fetch_metadata(id, version_number['Number']);
			results.push(data);
		}

		// restructure
		let structured_metadata = restructure_all_metadata(results);

		console.log(structured_metadata);

		// build table
		build_table_content(structured_metadata);
	}

	async function fetch_and_calc_original_schema() {
		let id = ds_test[cur_dataset_ids[0]]['Id'];
		console.log(id);
		let data = await fetch_metadata(id);

		let structured_metadata = restructure_all_metadata([data]);
		console.log(structured_metadata);
	}

	function add_version_id() {
		cur_version_ids.push(ds_test[1]['Versions'][0]['Id']);
		cur_version_ids = cur_version_ids;
	}

	function add_dataset_id() {
		cur_dataset_ids.push(1);
		cur_dataset_ids = cur_dataset_ids;
		add_version_id();
		// console.log(cur_dataset_ids)
	}

	/**
	 * @param {number} i
	 */
	function changed_dataset(i) {
		console.log(cur_dataset_ids[i]);
		console.log(ds_test[cur_dataset_ids[i]]['Versions'][0]['Id']);
		cur_version_ids[i] = ds_test[cur_dataset_ids[i]]['Versions'][0]['Id'];
		cur_version_ids = cur_version_ids;
	}

	/**
	 * @param {number} i
	 */
	function delete_dataset(i) {
		console.log('Deleting dataset: ', i);
		cur_dataset_ids.splice(i, 1);
		cur_dataset_ids = cur_dataset_ids;
		cur_version_ids.splice(i, 1);
		cur_version_ids = cur_version_ids;
		drop_table_column(i + 1);
	}

	/**
	 * @param {number} i
	 */
	function drop_table_column(i) {
		console.log(tablecontent);
		for (var x = 0; x < 20; x++) {
			if ('col' + i in tablecontent[0]) {
				break;
			} else {
				i += 1;
			}
		}

		for (var row_index in tablecontent) {
			console.log('Deleting: ', tablecontent[row_index], 'col' + i);
			delete tablecontent[row_index]['col' + i];
		}
		console.log('Deleting: ', tablecontent);
		tablecontent = tablecontent;
		table_content.set(tablecontent);
		add_columns(tablecontent);
	}

	// Create Table
	let table1 = createTable(table_content);

	let columns = table1.createColumns([
		table1.column({
			header: 'Field name',
			accessor: 'section'
		})
	]);
	let viewModel = table1.createViewModel(columns);
	// @ts-ignore

	$: headerRows = viewModel.headerRows;
	$: tableAttrs = viewModel.tableAttrs;
	$: rows = viewModel.rows;
	$: tableBodyAttrs = viewModel.tableBodyAttrs;

	/**
	 * @param {any[]} tablecontent
	 */
	function add_columns(tablecontent) {
		table1 = createTable(table_content);
		columns = [];
		columns = table1.createColumns([
			table1.column({
				header: 'Field Name',
				accessor: 'section'
			})
		]);
		let i = 1;
		for (var row_index in tablecontent[0]) {
			if (row_index !== 'section') {
				columns.push(
					table1.column({
						header: 'Dataset ' + i,
						accessor: row_index,
						cell: ({ value }) =>
							createRender(ShowDiff, {
								diff: value.diff,
								diff_orig: value.orig
							})
					})
				);
				i = i + 1;
			}
		}
		viewModel = table1.createViewModel(columns);
		headerRows = viewModel.headerRows;
		tableAttrs = viewModel.tableAttrs;
		rows = viewModel.rows;
		tableBodyAttrs = viewModel.tableBodyAttrs;
	}
	let count = 0;
	const reset = () => {
		count = 0;
		return '';
	};
	const increment = () => {
		count++;
		return count;
	};
</script>

<main class="p-4">
	<h2 class="pt-4 pb-4 text-secondary-700 dark:text-white">Compare Datasets & Versions</h2>
	<div class="width-max">
		<div class="grid justify-items-start pr-8">
			<div>
				<button
					class=" btn bg-primary-500 rounded-md "
					on:click={add_dataset_id}
					disabled={loading}
					title="Add Datasets to compare. 1st dataset is the reference for comparison."
					>Add Datasets</button
				>
				<div>
					{#if $datasets_result_date}<span class="italic"
							>Cache date: {$datasets_result_date}.
						</span><span on:keypress={update_cache} on:click={update_cache} title="Refresh cache"
							><i class="fa-solid fa-rotate" /></span
						>{/if}
				</div>
			</div>
		</div>

		{#if ds_test}
			<p class="pt-8 pb-8">
				Selection of versions only has an effect starting from version v2.17. Before the latest
				version is used.
			</p>
			{#each cur_dataset_ids as d_id, i}
				<label class="input-label w-80" for={'ds_select_' + { i }}
					><span>Dataset {i + 1}:</span>
					<div class=" input-group input-group-divider grid-cols-[auto_1fr_auto] ">
						<select
							class="select variant-form-material"
							id={'ds_select_' + { i }}
							bind:value={cur_dataset_ids[i]}
							on:change={() => changed_dataset(i)}
						>
							{#each ds_test as dataset, i}
								<option class="bg-surface-500" value={i}>{dataset['Id']}</option>
							{/each}
						</select>
						{#if cur_version_ids.length >= i}
							<select
								class="select variant-form-material"
								id={'version_select_' + { i }}
								bind:value={cur_version_ids[i]}
							>
								{#each ds_test[cur_dataset_ids[i]]['Versions'] as version_id}
									<option class="bg-surface-500" value={version_id['Id']}>
										{increment()} ({version_id['Id']})</option
									>
								{/each}
								{reset()}
							</select>
						{/if}
						<button class="variant-filled-secondary" on:click={() => delete_dataset(i)}
							>Remove</button
						>
					</div>
				</label>

				<br />
			{/each}
		{/if}
		{#if cur_dataset_ids.length >= 2}
			<div class="pl-80">
				<button
					class="btn bg-primary-500 rounded-md"
					on:click={calc_and_show_diff}
					disabled={loading}>Calculate Diff</button
				>
			</div>
		{/if}

		{#if loading == true}
			<div class="card variant-glass p-4 grid grid-cols-2 gap-4 text-center">
				<div class="w-full max-w-[120px] mx-auto space-y-4">
					<p>Loading</p>
					<ProgressRadial>{props.value}%</ProgressRadial>
				</div>
			</div>
		{/if}

		{#if tablecontent.length > 1}
			<div class="table-container">
				<table class="table table-hover" {...$tableAttrs}>
					<thead>
						{#each $headerRows as headerRow (headerRow.id)}
							<Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
								<tr {...rowAttrs}>
									{#each headerRow.cells as cell (cell.id)}
										<Subscribe attrs={cell.attrs()} let:attrs>
											<th {...attrs}>
												<Render of={cell.render()} />
											</th>
										</Subscribe>
									{/each}
								</tr>
							</Subscribe>
						{/each}
					</thead>
					<tbody {...$tableBodyAttrs}>
						{#each $rows as row (row.id)}
							<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
								<tr {...rowAttrs}>
									{#each row.cells as cell (cell.id)}
										<Subscribe attrs={cell.attrs()} let:attrs>
											<td class="table-cell-fit align-top" {...attrs}>
												<Render of={cell.render()} />
											</td>
										</Subscribe>
									{/each}
								</tr>
							</Subscribe>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</div>
	<style>
		table {
			border-spacing: 0;
			border-top: 1px solid black;
			border-left: 1px solid black;
		}
		th,
		td {
			border-bottom: 1px solid black;
			border-right: 1px solid black;
			padding: 0.5rem;
		}
		.table tbody td {
			white-space: break-spaces;
		}
	</style>
</main>
