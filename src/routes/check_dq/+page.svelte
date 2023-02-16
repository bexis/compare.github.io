<script>
	/*
	Everything you need to install and use Chart.js can be found here:
	https://chartjs-plugin-datalabels.netlify.app
	https://www.chartjs.org

	Boxplot-Github:
	https://github.com/sgratzl/chartjs-chart-boxplot
	*/
	import { datasets_result, table_content, url, token, api_version } from '../../store/store';
	import { onMount } from 'svelte';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	import { BoxPlotController } from '@sgratzl/chartjs-chart-boxplot';
	import { get_version, fetch_datasets } from '$lib/utils/utils';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import {
		Chart,
		ArcElement,
		LineElement,
		BarElement,
		PointElement,
		BarController,
		BubbleController,
		DoughnutController,
		LineController,
		PieController,
		PolarAreaController,
		RadarController,
		ScatterController,
		CategoryScale,
		LinearScale,
		LogarithmicScale,
		RadialLinearScale,
		TimeScale,
		TimeSeriesScale,
		Decimation,
		Filler,
		Legend,
		Title,
		Tooltip
	} from 'chart.js/dist/chart.mjs';

	Chart.register(
		ArcElement,
		LineElement,
		BarElement,
		PointElement,
		BarController,
		BubbleController,
		DoughnutController,
		LineController,
		PieController,
		PolarAreaController,
		RadarController,
		ScatterController,
		CategoryScale,
		LinearScale,
		LogarithmicScale,
		RadialLinearScale,
		TimeScale,
		TimeSeriesScale,
		Decimation,
		Filler,
		Legend,
		Title,
		Tooltip,
		ChartDataLabels,
		BoxPlotController
	);
	Chart.defaults.color = 'white';


	let headersList = {
		Accept: 'application/json',
		Authorization: 'Bearer ' + $token,
		'Content-Type': 'application/json'
	};

	let bodyContent = '';

	let loading = false;
	$: props = { value: 50, max: 100, step: 10 };

	let error = false;

	/**
	 * @type {any[] | string}
	 */
	let ds_test;
	datasets_result.subscribe((value) => {
		ds_test = value;
		// console.log(typeof ds_test);
	});
	/**
	 * @type {string[]}
	 */
	$: varibales = [];

	onMount(async () => {
		datasets_result.useLocalStorage();
		url.useLocalStorage();
		token.useLocalStorage();
		api_version.useLocalStorage();

		if (ds_test.length == 0) {
			loading = true;
			const result = await fetch_datasets($url + ds_version_ids_endpoint);
			datasets_result.set(result);
			loading = false;
		}
		headersList = {
		Accept: 'application/json',
		Authorization: 'Bearer ' + $token,
		'Content-Type': 'application/json'
	};
		const version = await get_version(headersList, $url.toString());
		api_version.set(version);
	});


	let endpoint_data_statistics = '/api/DataStatistic';
	let endpoint_data_quality = '/api/DataQuality/';
	let ds_version_ids_endpoint = '/api/Dataset';

	//------------------------------------------------------------------------
	//host and id are used in to fetch the necessary information using the API calls
	let host = $url;
	//this is the id of a dataset
	$: id = 31300; //5764;
	let showId = 0;

	const getDataStatistic = async function (/** @type {string} */ id) {
		loading = true;
		error = false;
		const response = await fetch($url + endpoint_data_statistics + '/' + id, {
			method: 'GET',
			headers: headersList
		});

		if (response.status == 200 ){
			try{
				return response.json();
			}catch{
				return false;
			}
			finally{

			}

		}
		else {
			return false;
		}

	};

	const getDataQuality = async function (/** @type {any} */ id) {
		const response = await fetch($url + endpoint_data_quality + '/' + id, {
			method: 'GET',
			headers: headersList
		});
		if (response.status == 200){
			return response.json();
		}
		else {
			return false;
		}
	};
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
		await getDataStatistic(id).then(async (variablen) => {
			if (variablen == false){
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
		await getDataQuality(id).then((dt) => {
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

		const pieDiv = document.getElementById('pie');
		const barDiv = document.getElementById('bar');
		const boxplotDiv = document.getElementById('boxplot');

		//get the object with the id of the dataset to create the visualizations
		getDQ(id).then((d) => {
			//--------------------------- completeness-Pie ------------------------------
			{
				const pieCanvas = document.createElement('canvas');
				const pie = new Chart(pieCanvas.getContext('2d'), {
					type: 'pie',
					data: {
						//names of the legends in the pie
						labels: ['Data', 'Missing Values', 'NULL'],
						datasets: [
							{
								//set the data for the pie
								data: [d.countData, d.countMv, d.countNull],
								backgroundColor: [
									'rgb(50,205,50)', //background color of the data part in the pie
									'rgb(255,165,0)', //background color of the missing values part in the pie
									'rgb(255,0,0)' //background color of the empty cells (null) part in the pie
								],
								hoverBackgroundColor: [
									'rgba(50,205,50,0.8)', //background color on hover of the data part in the pie
									'rgba(255,165,0,0.8)', //background color on hover of the missing values part in the pie
									'rgba(255,0,0,0.8)' //background color on hover of the empty cells (null) part in the pie
								]
							}
						]
					},
					//options of the pie
					options: {
						borderWidth: 1,
						plugins: {
							datalabels: {
								//set the percentage in the pie
								formatter: (value) => {
									return ((value * 100) / d.count).toFixed(2) + '%';
								},
								color: '#fff',
								font: {
									size: 18
								},
								//hide precentage in the pie, if is 0%
								display: [d.countData > 0, d.countMv > 0, d.countNull > 0],
								align: 'start',
								//prevents the overlap of the percentage
								offset: [-16, -32, -48]
							},
							//set the content of the tooltip
							tooltip: {
								backgroundColor: '#ff',
								callbacks: {
									label: function (context) {
										const x = context.parsed;
										if (x !== null) {
											return `${context.label}: ${x} (${((x * 100) / d.count).toFixed(2)}%)`;
										}
									}
								}
							}
						}
					}
				});
				pieDiv.innerHTML = '';
				pieDiv.appendChild(pieCanvas);
			}
			//--------------------------- completeness-bar ------------------------------
			{
				const barCanvas = document.createElement('canvas');
				//create needed data for the bar
				const barData = {
					labels: [],
					datasets: []
				};
				//definde background colors of the first 5 missing values type
				const bgcs = [
					'rgba(255, 159, 64, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(201, 203, 207, 0.2)'
				];
				//definde background colors on hover of the first 5 missing values type
				const bcs = [
					'rgb(255, 159, 64)',
					'rgb(54, 162, 235)',
					'rgb(153, 102, 255)',
					'rgb(75, 192, 192)',
					'rgb(201, 203, 207)'
				];

				//create on dataset for each type of missing values and put it in the list barData.datasets
				d.missingValues.forEach((mv, i) => {
					//if there is more then 5 type of missing values, create random color for each new type
					if (i > 4) {
						const color = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
						bcs.push(color);
						bgcs.push(color + '33');
					}
					const dataset = {
						label: mv,
						data: [],
						backgroundColor: bgcs[i],
						borderColor: bcs[i]
					};
					barData.datasets.push(dataset);
				});

				//create dataset for empty cells (null) and put it in the list bar.Data.datasets
				const nullsDataset = {
					label: 'NULL',
					data: [],
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgb(255, 99, 132)'
				};
				barData.datasets.push(nullsDataset);

				//set the names of each dataset, this names are variables names
				d.affectedVariablen.forEach((v) => {
					barData.labels.push(v.VariableName);
					barData.datasets.forEach((d) => {
						if (v[d.label]) {
							d.data.push(v[d.label]);
							return;
						}
						d.data.push(null);
					});
				});

				barDiv.innerHTML = '';
				//get html element of the table that used to show affected variables
				const div = document.getElementById('affectedVar');
				div.innerHTML = '';
				//if there is no affacted variable, then there is no need to create this visualization (the bar)
				if (d.affectedVariablen.length > 0) {
					// if there is a lot of affacted variables, then set the height of the bar biger to show it corretly
					if (d.affectedVariablen.length > 10) {
						barCanvas.height = d.affectedVariablen.length * 16;
					}

					//create table to show the names of the affected variables
					const table = document.createElement('table');
					div.appendChild(table);
					const head = document.createElement('tr');
					table.appendChild(head);
					const th = document.createElement('th');
					th.innerText = `${d.affectedVariablen.length} of ${d.countColumns} variables are affected`;
					head.appendChild(th);
					d.allVariablen.forEach((v) => {
						const tr = document.createElement('tr');
						tr.innerText += v.VariableName;
						if (d.affectedVariablen.includes(v)) {
							tr.style.backgroundColor = '#ff000050';
						}
						table.appendChild(tr);
					});

					//create the visualization bar
					const bar = new Chart(barCanvas.getContext('2d'), {
						type: 'bar',
						data: barData,
						options: {
							responsive: true,
							skipNull: true,
							borderWidth: 1,
							//set the y-axis as base (bar use usually x-axis)
							indexAxis: 'y',
							plugins: {
								datalabels: {
									//set the percentage in the bar
									formatter: (value) => {
										if (value) {
											const pr = ((value * 100) / d.countRows).toFixed(2);
											if (pr > 8) {
												return pr + '%';
											}
										}
										//if percentage 0% or 8%< then dont show it
										return null;
									},
									display: 'auto'
								},

								//set content of the tootip
								tooltip: {
									backgroundColor: '#ff',
									callbacks: {
										label: function (context) {
											const x = context.parsed.x;
											if (x !== null) {
												return `${context.dataset.label}: ${x} (${((x * 100) / d.countRows).toFixed(
													2
												)}%)`;
											}
										}
									}
								}
							},

							//costumes the x-axis and the y-axis (name and font of the axis)
							scales: {
								x: {
									title: {
										display: true,
										text: "Row's number",
										font: {
											family: 'Comic Sans MS',
											size: 16,
											weight: 'bold'
										}
									},
									//x-axis represent the number the the rows in the table
									max: d.countRows,
									stacked: true
								},
								y: {
									title: {
										display: true,
										text: 'Variables',
										font: {
											family: 'Comic Sans MS',
											size: 16,
											weight: 'bold'
										}
									},
									stacked: true,

									//if the name of the variables are very long, don't show the whole name, show just first 20 letter
									ticks: {
										callback: function (index) {
											let label = this.getLabelForValue(index);
											if (label.length > 20) {
												label = label.substring(0, 20) + '...';
											}
											return label;
										}
									}
								}
							},
							interaction: {
								mode: 'index',
								axis: 'y',
								intersect: false
							}
						}
					});
					barDiv.appendChild(barCanvas);
				}
			}
			//------------------------------ duplicates ---------------------------------
			{
				const dupTable = document.getElementById('dupTable');
				const duplicates = document.getElementById('duplicates');
				const dupDiv = document.createElement('div');
				dupDiv.innerText = 'Duplicates: 0%';
				dupTable.innerHTML = '';
				duplicates.innerHTML = '';
				duplicates.appendChild(dupDiv);

				//create table of all duplicates as html element
				if (d.duplicates.length) {
					const table = document.createElement('table');
					const tHead = document.createElement('thead');
					const tBody = document.createElement('tbody');
					const tr = document.createElement('tr');
					const headcount = document.createElement('th');
					headcount.innerText = 'Duplicates';
					tr.appendChild(headcount);
					d.allVariablen.forEach((v) => {
						const th = document.createElement('th');
						th.innerText = v.VariableName;
						tr.appendChild(th);
					});
					tHead.appendChild(tr);
					table.appendChild(tHead);
					//dupSum is the number of all duplicates, wich can be deleted from the table
					let dupSum = -d.duplicates.length;
					d.duplicates.forEach((dup) => {
						const tr = document.createElement('tr');
						const dupCount = document.createElement('td');
						dupCount.innerText = dup['count'];
						dupSum += dup['count'];
						tr.appendChild(dupCount);
						d.allVariablen.forEach((v) => {
							const td = document.createElement('td');
							//get the values of cells bei id of the variable
							td.innerText = dup['var' + v.VariableId];
							tr.appendChild(td);
						});
						tBody.append(tr);
						table.appendChild(tBody);
					});
					dupTable.appendChild(table);

					//set percentage of duplicates
					const dupPerc = ((dupSum / d.countRows) * 100).toFixed(2);
					dupDiv.innerText = 'Duplicates: ' + dupPerc + '%';
					//if duplicates more the 10% set color red, else orange
					if (dupPerc > 10) {
						dupDiv.style.backgroundColor = 'rgb(255, 0, 0, 0.5)';
						dupDiv.style.borderColor = 'rgb(255, 0, 0)';
					} else {
						dupDiv.style.backgroundColor = 'rgb(255, 165, 0, 0.5)';
						dupDiv.style.borderColor = 'rgb(255, 165, 0)';
					}
				}
			}
			//---------------------------- oulier-boxplot -------------------------------
			{
				const boxplotCanvas = document.createElement('canvas');
				const boxplotData = {
					labels: [],
					datasets: []
				};
				let min, max;
				d.allVariablen.forEach((v) => {
					//if the type of the vriable is string, there is no need for the visualizaion
					if (v.DataTypeName === 'string') {
						return;
					}
					//it is not possible to show all variables in one visualization because the range of values can be very different, therefore only one variable needs to be visualized.
					//this is example, you can change it to visualize one variable of the table
					if (v.VariableName !== 'Ammonium') {
						return;
					}

					//set min and max for the y-axis in the boxplot
					min = v.min;
					max = v.max;
					boxplotData.labels.push(v.VariableName);
					const data = [];
					v.uniqueValues.forEach((uv) => {
						//if the value is not number (null) don't put it in the data for the boxplot, otherwise, it's not gonna working
						if (typeof uv.var !== 'number') {
							return;
						}
						data.push(uv.var);
					});
					boxplotData.datasets.push({
						label: v.VariableName,
						data: [data],
						borderColor: 'rgb(54, 162, 235)', //border color of the dataset
						backgroundColor: 'rgb(54, 162, 235, 02)', //background color of the dataset
						borderWidth: 1,
						outlierBackgroundColor: 'red', //color of the outlier
						itemBackgroundColor: '#000', //color of other values
						outlierRadius: 4, //size of the outlier
						itemRadius: 2 //size of other values
					});
				});
				boxplotDiv.innerHTML = '';
				if (boxplotData.datasets.length > 0) {
					const boxplot = new Chart(boxplotCanvas.getContext('2d'), {
						type: 'boxplot',
						data: boxplotData,
						options: {
							plugins: {
								datalabels: {
									display: false
								},
								tooltip: {
									backgroundColor: '#ff'
								}
							},
							scales: {
								y: {
									type: 'logarithmic',
									//set the min and max of the y-axis
									min: min - 1,
									max: max + 1
								}
							}
						}
					});
					boxplotDiv.appendChild(boxplotCanvas);
				}
			}
			//------------------------------- scatter ----------------------------------
			//varibales = d.allVariablen;
			console.log(d);
			const scatterDiv_temp = document.getElementById('scatter');
			scatterDiv_temp.innerHTML = '';
			d.allVariablen.forEach((v) => {
				var td = htmlToElement('<div id="scatter_' + v.VariableName + '</div>');
				const str = '<div id="scatter_' + v.VariableName + '"></div>';
				console.log(str);
				const scatterDiv_temp = document.getElementById('scatter');
				scatterDiv_temp?.insertAdjacentHTML('beforeend', str);
				const scatterDiv = document.getElementById('scatter_' + v.VariableName);
				show_unique_value_distribution(d, v, scatterDiv);
			});
		});
	};

	/**
	 * @param {string} html
	 */
	function htmlToElement(html) {
		var template = document.createElement('template');
		html = html.trim(); // Never return a text node of whitespace as the result
		template.innerHTML = html;
		return template.content.firstChild;
	}

	async function sleep() {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	}

	function show_unique_value_distribution(d, v, scatterDiv) {
		//this scatter show all values in on variable of the table
		//const scatterDiv = document.getElementById("scatter");
		const scatterCanvas = document.createElement('canvas');
		const scatterData = {
			labels: [],
			datasets: []
		};
		//	d.allVariablen.forEach((v) => {
		//if the type of the vriable is string, there is no need for the visualizaion
		if (v.DataTypeName === 'string') {
			return;
		}
		//it is not possible to show all variables in one visualization because the range of values can be very different, therefore only one variable needs to be visualized.
		//this is exaple, you can change it to visualize one variable of the table
		//if (v.VariableName !== "Nitrat") {
		//	return;
		//}
		//create random color for border color and background color for the dataset
		const color = '#' + (((1 << 24) * Math.random()) | 0).toString(16);

		//this is list of the values in the variable as points of x-y-coordinate system
		const points = [];
		const max = Math.max(...v.uniqueValues.map((o) => o.count));
		const min = Math.min(...v.uniqueValues.map((o) => o.count));
		const without_max = v.uniqueValues.filter(function (obj) {
			return obj.count !== max;
		});
		const max_new = Math.max(...without_max.map((o) => o.count));
		console.log(max, min, max_new, max / max_new);
		let text = '';
		let add = '';
		if (max / max_new < 10) {
			let intval = max / 50;
			if (max < 50){intval = 1;}
			text = ': max count ' + max;
			v.uniqueValues.forEach((uv, i) => {
				let count = 0;
				if (max < 50){
					count = uv.count}
				else{
					count = Math.round((uv.count / intval + 1))
					add = ' (radius: count/' + intval + ' +1)';
				}

				points.push({
					x: i,
					y: uv.var,
					r: Math.round(uv.count / intval + 1)
				});
			});
		} else {
			let intval = max_new / 50;

			text = ': excluding max count ' + max ;
			without_max.forEach((uv, i) => {
				let count = 0;
				if (max_new < 50){
					count = uv.count}
				else{
					count = Math.round((uv.count / intval + 1))
					add = ' (radius: count/' + intval + ' +1)';
				}
				points.push({
					x: i,
					y: uv.var,
					r: count
				});
			});
		}
		console.log(points);
		scatterData.datasets.push({
			label: v.VariableName + text + add,
			data: points,
			borderColor: color,
			backgroundColor: color + '33', //make the background color brighter of the border color
			borderWidth: 1
		});
		//	});
		console.log(scatterDiv, 'scatter');
		scatterDiv.innerHTML = '';
		if (scatterData.datasets.length > 0) {
			const scatter = new Chart(scatterCanvas.getContext('2d'), {
				type: 'bubble',
				data: scatterData,
				options: {
					plugins: {
						datalabels: {
							display: false
						}
					}
				}
			});
			scatterDiv.appendChild(scatterCanvas);
		}
	}
</script>

<main class="p-4">
	<h2 class="pt-4 pb-4 text-secondary-700 dark:text-white">Data Quality</h2>
	<div>
		<label class="input-label w-[50%]" for="dq">
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-md">
				<select
					class="select variant-form-material w-40"
					id="dq"
					bind:value={id}
					on:change={() => showVis}
				>
					{#each ds_test as dataset, i}
						<option class="bg-surface-500" value={dataset['Id']}>{dataset['Id']}</option>
					{/each}
				</select>
				<button class="bg-primary-500" on:click={showVis}>Show DQ</button>
			</div>
		</label>
		<!--	Token: <input bind:value={token} /
		URL: <input bind:value={host} />>-->
	</div>

	{#if error == true}
<p>An error occurred. Possible reason: Dataset does not contain structured primary data.</p>
	{/if}
	{#if loading == true}
		<div class="card variant-glass p-4 grid grid-cols-2 gap-4 text-center">
			<div class="w-full max-w-[120px] mx-auto space-y-4">
				<p>Loading</p>
				<ProgressRadial>{props.value}%</ProgressRadial>
			</div>
		</div>
	{:else}

		{/if}
		<h3 class="pt-4 pb-4 text-secondary-700 dark:text-white">1. Duplicate Check</h3>
		<div id="duplicates" />
		<h3 class="pt-4 pb-4 text-secondary-700 dark:text-white">2. Missing Value Check</h3>
		<div class="dashbord">
			<div class="vollstContainer">
				<div id="pie" />
				<div id="bar" />
				<div id="affectedVar" />
			</div>
		<h3 class="pt-4 pb-4 text-secondary-700 dark:text-white">3. Distribution & Count of Unique Values (Data type: number)</h3>
			<div id="scatter"></div>
			<div id="boxplot" />
			<div id="dupTable" />
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
