<script>
	/*
	Everything you need to install and use Chart.js can be found here:
	https://chartjs-plugin-datalabels.netlify.app
	https://www.chartjs.org

	Boxplot-Github:
	https://github.com/sgratzl/chartjs-chart-boxplot
	*/
	import { url, token, api_version, structured_datasets } from '../../store/store';
	import { onMount } from 'svelte';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	import { BoxPlotController } from '@sgratzl/chartjs-chart-boxplot';
	import { get_version, fetch_datasets } from '$lib/utils/utils';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import {
		show_dublicates,
		show_unique_value_distribution,
		boxplot,
		completeness_pie,
		completeness_bar
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
		// console.log(typeof ds_test);
	});
	/**
	 * @type {string[]}
	 */
	$: varibales = [];

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

	//------------------------------------------------------------------------
	//host and id are used in to fetch the necessary information using the API calls
	let host = $url;
	//this is the id of a dataset
	/**
	 * @type {any}
	 */
	$: id = 31300; //5764;
	let showId = 0;

	//-------------------------------------------------------------------------
	//In this function a object is created that contains all the necessary information for the visualization of Data quality
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
		//affectedVariablen is a list of all variables (columns) affected by completeness
		/**
		 * @type {any[]}
		 */
		const affectedVariablen = [];
		//missingVAlues is a list of all type of Missing Values
		/**
		 * @type {any[]}
		 */
		const missingValues = [];

		//get the variables using an api call and prepare them for the visualization
		loading = true;
		error = false;
		await getData($url + '/' + endpoint_data_statistics, id, $token).then(async (variablen) => {
			if (variablen == false) {
				loading = false;
				error = true;
			}
			allVariablen = variablen;
			countRows = parseInt(variablen[0].count);
			countColumns = variablen.length;
			countAll = countRows * countColumns;
			showId = id;
			await variablen.forEach((variable) => {
				const mvs = variable.missingValues;
				const uvs = variable.uniqueValues;
				//count empty cells in this variable
				const nulls = (() => {
					const obj = uvs.find((x) => x.var === 'NULL' || x.var === null);
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
				mvs.forEach((mv) => {
					const name = mv.displayName;
					const value = mv.placeholder;
					const count = (() => {
						const obj = uvs.find((x) => x.var === Number(value));
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
			});
		});

		//get all duplicates using api call
		await getData($url + '/' + endpoint_data_quality, id, $token).then((dt) => {
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
	//All visualizations are created in the function
	//-------------------------------------------------------------------------
	const showVis = async function () {
		//get html elements which are used for the visualization

		// remove existing graphs
		const scatterDiv_temp = document.getElementById('scatter');
		scatterDiv_temp.innerHTML = '';
		const pie = document.getElementById('pie');
		pie.innerHTML = '';
		const bar = document.getElementById('bar');
		bar.innerHTML = '';
		const duplicates = document.getElementById('duplicates');
		duplicates.innerHTML = '';
		const boxplotDiv = document.getElementById('boxplot');
		boxplotDiv.innerHTML = '';
		const barDiv = document.getElementById('bar');
		barDiv.innerHTML = '';

		//get the object with the id of the dataset to create the visualizations
		getDQ(id).then((d) => {
			//--------------------------- completeness-Pie ------------------------------
			const pieDiv = document.getElementById('pie');
			completeness_pie(d, pieDiv);
			//--------------------------- completeness-bar ------------------------------
			const barDiv = document.getElementById('bar');
			completeness_bar(d, barDiv);
			//------------------------------ duplicates ---------------------------------
			show_dublicates(d);
			//---------------------------- oulier-boxplot -------------------------------

			const boxplotDiv_temp = document.getElementById('boxplot');
			// @ts-ignore
			boxplotDiv_temp.innerHTML = '';
			d.allVariablen.forEach((v) => {
				const str = '<div id="boxplot_' + v.VariableName + '"></div>';
				console.log(str);
				const boxplotDiv_temp = document.getElementById('boxplot');
				boxplotDiv_temp?.insertAdjacentHTML('beforeend', str);
				const boxplotDiv = document.getElementById('boxplot_' + v.VariableName);
				boxplot(v, boxplotDiv);
			});

			//------------------------------- scatter ----------------------------------
			//varibales = d.allVariablen;
			console.log(d);
			const scatterDiv_temp = document.getElementById('scatter');
			// @ts-ignore
			scatterDiv_temp.innerHTML = '';
			d.allVariablen.forEach((v) => {
				const str = '<div id="scatter_' + v.VariableName + '"></div>';
				console.log(str);
				const scatterDiv_temp = document.getElementById('scatter');
				scatterDiv_temp?.insertAdjacentHTML('beforeend', str);
				const scatterDiv = document.getElementById('scatter_' + v.VariableName);
				show_unique_value_distribution(d, v, scatterDiv);
			});
		});
	};

	const onKeyPress = (/** @type {{ charCode: number; }} */ e) => {
		if (e.charCode === 13) showVis();
	};
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

		<!--	Token: <input bind:value={token} /
		URL: <input bind:value={host} />>-->
	</div>

	{#if error == true}
		<p class="text-red-500">An error occurred.</p>
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
	<div id="duplicates" />
	<div id="dupTable" />
	<h3 class="pt-4 pb-4 text-secondary-700 dark:text-white">2. Missing Value Check</h3>
	<div class="dashbord">
		<div class="vollstContainer">
			<div id="pie" />
			<div id="bar" />
			<div id="affectedVar" />
		</div>
		<h3 class="pt-4 pb-4 text-secondary-700 dark:text-white">
			3. Distribution & Count of Unique Values (Data type: number)
		</h3>
		<div id="scatter" />
		<div id="boxplot" />
	</div>
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

	:global(#dupTable > table) {
		width: 100%;
	}

	:global(table, th, td) {
		border: 1px solid black;
	}

	:global(#duplicates > div) {
		width: fit-content;
		padding: 0.5rem;
		font-size: 2rem;
		font-weight: bold;
		border: solid 0.2rem;
		border-color: rgb(0, 128, 0);
		background-color: rgb(0, 128, 0, 0.5);
	}
</style>
