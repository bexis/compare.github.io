<script>
	import { url, token, api_version, structured_datasets } from '../../store/store';
	import { onMount } from 'svelte';
	import { get_version, fetch_datasets } from '$lib/utils/utils';
	import { ProgressRadial, Tab, TabGroup } from '@skeletonlabs/skeleton';
	import {
		show_dublicates as show_duplicates,
		show_unique_value_distribution,
		boxplot,
		completeness_pie,
		completeness_bar,
		bar_cat
	} from '../check_dq/draw_charts';
	import { getData } from '../check_dq/fetch_data';

	let loading = false;
	$: props = { value: 50, max: 100, step: 10 };

	let error = false;

	/**
	 * @type {any[] | string}
	 */
	let ds_struct;
	structured_datasets.subscribe((/** @type {string | any[]} */ value) => {
		ds_struct = value;
		console.log(ds_struct);
	});

	onMount(async () => {
		structured_datasets.useLocalStorage();
		url.useLocalStorage();
		token.useLocalStorage();
		api_version.useLocalStorage();

		if (ds_struct.length == 0) {
			loading = true;
			const result = await fetch_datasets($url + endpoint_structured_datasets);
			structured_datasets.set(result);
			loading = false;
		}
		let headersList = {
			Accept: 'application/json',
			Authorization: 'Bearer ' + $token,
			'Content-Type': 'application/json'
		};
		const version = await get_version(headersList, $url.toString());
		api_version.set(version);
	});

	let endpoint_data_statistics = '/api/DataStatistic';
	let endpoint_data_quality = '/api/DataQuality/';
	let endpoint_structured_datasets = '/api/DataStatistic';

	//this is the id of a dataset
	/**
	 * @type {any}
	 */
	$: id = 31300; //5764;
	let showId = 0;
	/**
	 * @type {{ count: number; countRows: number; countColumns: number; countData: number; countMv: number; countNull: number; missingValues: any[]; affectedVariablen: any[]; allVariablen: any[]; duplicates: any[]; }}
	 */
	let statisticAPIdata;

	//affectedVariablen is a list of all variables (columns) affected by completeness
	/**
	 * @type {any[]}
	 */
	$: affectedVariablen = [];

	//-------------------------------------------------------------------------
	// Create base object
	//-------------------------------------------------------------------------
	const getDQ = async function (/** @type {string | number} */ id) {
		//countAll represents the number of all cells in a table
		let countAll = 0;
		//countRows represents the number of all rows in a table
		let countRows = 0;
		//countColumns represents the number of all columns in a table
		let countColumns = 0;
		//countMv represents the number of all Missing Values in a table
		let countMv = 0;
		//countNull represents the number of all empty cells in a table
		let countNull = 0;
		//duplicates is a list of duplicates in a table
		/**
		 * @type {any[]}
		 */
		let duplicates = [];
		//allVariablen is a list of all variables (columns) in a table
		/**
		 * @type {any[]}
		 */
		let allVariablen = [];

		//missingVAlues is a list of all type of Missing Values
		/**
		 * @type {any[]}
		 */
		const missingValues = [];

		//get the variables using an api call and prepare them for the visualization
		loading = true;
		error = false;
		await getData($url + '/' + endpoint_data_statistics, id, $token.toString()).then(
			async (variables) => {
				if (variables == false) {
					loading = false;
					error = true;
				}
				allVariablen = variables;
				countRows = parseInt(variables[0].count);
				countColumns = variables.length;
				countAll = countRows * countColumns;
				// @ts-ignore
				showId = id;
				await variables.forEach(
					(
						/** @type {{ [x: string]: any; missingValues: any; uniqueValues: any; NULL: any; }} */ variable
					) => {
						const mvs = variable.missingValues;
						const uvs = variable.uniqueValues;
						//count empty cells in this variable
						const nulls = (() => {
							const obj = uvs.find(
								(/** @type {{ var: string | null; }} */ x) => x.var === 'NULL' || x.var === null
							);
							return obj ? obj.count : 0;
						})();
						variable.NULL = nulls;
						if (nulls) {
							countNull += nulls;
							if (affectedVariablen.indexOf(variable) === -1) {
								affectedVariablen.push(variable);
							}
						}

						//get all missing Values in this variable, count them and add this number to countMv
						mvs.forEach((/** @type {{ displayName: any; placeholder: any; }} */ mv) => {
							const name = mv.displayName;
							const value = mv.placeholder;
							const count = (() => {
								const obj = uvs.find(
									(/** @type {{ var: number; }} */ x) => x.var === Number(value)
								);
								return obj ? obj.count : 0;
							})();
							if (count) {
								countMv += count;
								variable[name] = count;
								if (missingValues.indexOf(name) === -1) {
									missingValues.push(name);
								}
								if (affectedVariablen.indexOf(variable) === -1) {
									affectedVariablen.push(variable);
								}
							}
						});
					}
				);
			}
		);

		//get all duplicates using api call
		await getData($url + '/' + endpoint_data_quality, id, $token.toString()).then((dt) => {
			duplicates = dt.DataTable;
		});
		loading = false;
		//set and return the result for the visualization
		const result = {
			count: countAll,
			countRows: countRows,
			countColumns: countColumns,
			countData: countAll - countMv - countNull,
			countMv: countMv,
			countNull: countNull,
			missingValues: missingValues,
			affectedVariablen: affectedVariablen,
			allVariablen: allVariablen,
			duplicates: duplicates
		};
		return result;
	};

	//-------------------------------------------------------------------------
	// Create visualizations
	//-------------------------------------------------------------------------
	let duplicate_percent = -1;
	const showVis = async function () {
		// remove existing graphs
		remove_content('scatter');
		remove_content('pie');
		remove_content('bar');
		remove_content('duplicates');
		remove_content('boxplot');
		remove_content('dupTable');
		remove_content('affectedVar');
		remove_content('bar_cat');

		// create charts
		getDQ(id).then((d) => {
			statisticAPIdata = d;

			const pieDiv = document.getElementById('pie');
			completeness_pie(d, pieDiv);

			const barDiv = document.getElementById('bar');
			completeness_bar(d, barDiv);

			// @ts-ignore
			duplicate_percent = show_duplicates(d);
			console.log('doppelt', duplicate_percent);

			const boxplotDiv = document.getElementById('boxplot');
			if (boxplotDiv) {
				boxplotDiv.innerHTML = '';
			}
			d.allVariablen.forEach((v) => {
				const str = '<div id="boxplot_' + v.VariableName + '"></div>';
				console.log(str);
				const boxplotDiv_temp = document.getElementById('boxplot');
				boxplotDiv_temp?.insertAdjacentHTML('beforeend', str);
				const boxplotDiv = document.getElementById('boxplot_' + v.VariableName);
				boxplot(v, boxplotDiv);
			});

			bubble_plot();

			category_bar_plot();
		});
	};
	/**
	 * @type {number}
	 */
	let count_number = 0;
	function bubble_plot() {
		const d = statisticAPIdata;
		console.log(d);
		const scatterDiv_temp = document.getElementById('scatter');
		// @ts-ignore
		if (scatterDiv_temp) {
			scatterDiv_temp.innerHTML = '';
		}
		count_number = 0;
		d.allVariablen.forEach((v) => {
			const str = '<div id="scatter_' + v.VariableName + '"></div>';
			console.log(str);
			const scatterDiv_temp = document.getElementById('scatter');
			scatterDiv_temp?.insertAdjacentHTML('beforeend', str);
			const scatterDiv = document.getElementById('scatter_' + v.VariableName);
			const types = ['String', 'DateTime'];
			if (!types.includes(v.DataTypeSystemType)) {
				show_unique_value_distribution(d, v, scatterDiv);
				count_number++;
			}
		});
	}

	let count_text = 0;
	let count_date = 0;
	function category_bar_plot() {
		const d = statisticAPIdata;
		const barDiv_temp = document.getElementById('bar_cat');

		if (barDiv_temp) {
			barDiv_temp.innerHTML = '';
		}
		count_text = 0;
		d.allVariablen.forEach((v) => {
			const str = '<div id="bar_cat_' + v.VariableName + '"></div>';
			console.log(str);
			const barDiv_temp = document.getElementById('bar_cat');
			barDiv_temp?.insertAdjacentHTML('beforeend', str);
			const barDiv = document.getElementById('bar_cat_' + v.VariableName);

			if (v.DataTypeSystemType == 'String') {
				bar_cat(v, barDiv);
				count_text++;
			}

			if (v.DataTypeSystemType == 'DateTime') {
				bar_cat(v, barDiv);
				count_date++;
			}
		});
	}
	/**
	 * @param {string} element
	 */
	function remove_content(element) {
		const div = document.getElementById(element);
		if (div) {
			div.innerHTML = '';
		}
	}

	const onKeyPress = (/** @type {{ charCode: number; }} */ e) => {
		if (e.charCode === 13) showVis();
	};

	let tabsBasic = 0;
	let tabsMissingValues = 0;
</script>

<main class="p-4">
	<h2 class="pt-4 pb-4 text-secondary-700 dark:text-white">Data Quality</h2>
	<div>
		<label class="input-label w-[80%]" for="dq">
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-md">
				<select
					class="select variant-form-material w-40"
					id="dq"
					bind:value={id}
					disabled={loading}
				>
					{#each ds_struct as dataset, i}
						<option class="bg-surface-500" value={dataset}>{dataset}</option>
					{/each}
				</select>
				<input
					class="w-96"
					type="text"
					id="name"
					bind:value={id}
					disabled={loading}
					on:keypress={onKeyPress}
				/>
				<button class="btn bg-primary-500 rounded-md w-96" on:click={showVis} disabled={loading}
					>Show DQ</button
				>
			</div>
		</label>
	</div>

	{#if error == true}
		<p class="text-red-500 pt-2">An error occurred.</p>
		<blockquote>
			Dataset does not contain structured primary data or the dataset is not public and you are not
			logged in.
		</blockquote>
	{/if}
	{#if loading == true}
		<div class="card variant-glass p-4 grid grid-cols-2 gap-4 text-center">
			<div class="w-full max-w-[120px] mx-auto space-y-4">
				<p>Loading</p>
				<ProgressRadial>{props.value}%</ProgressRadial>
			</div>
		</div>
	{:else}{/if}
	<h3 class="pt-4 pb-4 text-secondary-700 dark:text-white">1. Duplicate Check</h3>
	{#if duplicate_percent == 0}
		<aside class="alert variant-ghost-success w-80">
			<i class="fa-solid fa-circle-check text-2xl" />
			<h3 class="alert-message">Duplicates: 0%</h3>
		</aside>
	{/if}
	{#if duplicate_percent <= 10 && duplicate_percent > 0}
		<aside class="alert variant-ghost-warning w-80">
			<i class="fa-solid fa-circle-exclamation text-2xl" />
			<h3 class="alert-message">Duplicates: {duplicate_percent}%</h3>
		</aside>
	{/if}
	{#if duplicate_percent > 10}
		<aside class="alert variant-ghost-error w-80">
			<i class="fa-solid fa-circle-xmark text-2xl" />
			<h3 class="alert-message">Duplicates: {duplicate_percent}%</h3>
		</aside>
	{/if}
	<div id="duplicates" />
	<div id="dupTable" />
	<h3 class="pt-4 pb-4 text-secondary-700 dark:text-white">2. Missing Value Check</h3>

	<TabGroup>
		<Tab bind:group={tabsMissingValues} name="Graph" value={0}>Graph</Tab>
		<Tab bind:group={tabsMissingValues} name="Table" value={1}>Table</Tab>
		<svelte:fragment slot="panel">
			<div hidden={tabsMissingValues !== 0}>
				<div class="dashbord">
					<div class="vollstContainer">
						<div id="pie" />
						<div id="bar" />
						<div id="affectedVar" />
					</div>
				</div>
			</div>
			<div hidden={tabsMissingValues !== 1}>
				{#if affectedVariablen && affectedVariablen.length > 0}
					<table>
						<tr><th>Variable Name</th><th>Unit</th><th>Count NA</th><th>Count Null</th></tr>
						{#each affectedVariablen as variable}
							<tr
								><td>{variable.VariableName}</td><td>{variable.Unit}</td><td>{variable.NA}</td><td
									>{variable.NULL}</td
								></tr
							>
						{/each}
					</table>
				{/if}
			</div>
		</svelte:fragment>
	</TabGroup>
	<h3 class="pt-4 pb-4 text-secondary-700 dark:text-white">
		3. Distribution & Count of Unique Values
	</h3>

	<TabGroup>
		<!-- Tabs -->
		<Tab bind:group={tabsBasic} name="Bubble Plot (number)" value={0}
			>Bubble Plot (#)<sup class="badge variant-filled-primary">{count_number}</sup></Tab
		>
		<Tab bind:group={tabsBasic} name="Box-Whisker-Plot (number)" value={1}
			>Box-Whisker-Plot (#)<sup class="badge variant-filled-primary">{count_number}</sup></Tab
		>
		<Tab bind:group={tabsBasic} name="Bar Plot (text)" value={2}
			>Bar Plot (text)<sup class="badge variant-filled-primary">{count_text}</sup></Tab
		>
		<Tab bind:group={tabsBasic} name="Date" value={3}
			>Date<sup class="badge variant-filled-primary">{count_date}</sup></Tab
		>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			<div hidden={tabsBasic !== 0} id="scatter" />
			<div hidden={tabsBasic !== 1} id="boxplot" />
			<div hidden={tabsBasic !== 2} id="bar_cat" />
			<div hidden={tabsBasic !== 3}>
				<p class="pt-2">Sorry, no visualization available.</p>
			</div>
		</svelte:fragment>
	</TabGroup>
</main>

<style>
	.dashbord {
		display: flex;
		flex-direction: column;
	}

	.vollstContainer {
		display: flex;
	}

	#pie {
		max-height: 40rem;
		width: 20rem;
		min-width: 20rem;
		padding: 1rem;
		margin: 1rem;
		overflow: auto;
	}

	#bar {
		max-height: 20rem;
		width: 40rem;
		min-width: 40rem;
		padding: 1rem;
		margin: 1rem;
		overflow: auto;
	}

	#boxplot {
		width: 40rem;
		padding: 1rem;
		margin: 1rem;
		overflow: auto;
	}

	#scatter {
		width: 40rem;
	}

	#affectedVar {
		max-height: 20rem;
		overflow: auto;
		min-width: max-content;
	}

	#dupTable {
		width: 40rem;
		max-height: 20rem;
		margin: 0.4rem;
		overflow: auto;
	}

	#bar_cat {
		max-height: 20rem;
		width: 40rem;
		min-width: 40rem;
		padding: 1rem;
		margin: 1rem;
		overflow: auto;
	}

	:global(#dupTable > table) {
		width: 100%;
	}

	:global(table, th, td) {
		border: 1px solid black;
	}
</style>
