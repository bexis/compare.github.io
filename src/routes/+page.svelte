<script>
	import { diffChars } from 'diff';
	import { html } from 'gridjs';
	import Grid from "gridjs-svelte";
	import { onMount } from 'svelte';
	import { datasets_result } from '../store/store.js';

	// @todo: add 2nd option to compare based on metadata JSON between datasets and/or versions example: https://www.bexis.uni-jena.de/api/Metadata/31402 (versions will come in 2.17 ...{id}/{versinId})
	// compare "#text" (if given partyid as well) one as base -> compare to x datasets OR all versions (versions newest, newest-1, newest-2 until version 1)

	let bg_color_added = "rgba(144, 238, 144, 0.38)";
	let bg_color_removed = "rgba(255, 0, 0, 0.22)";
	let text_color_added = "green";
	let text_color_removed = "red";
	

	/**
	 * @type {any[]}
	 */
	$: cur_dataset_ids = []
	/**
	 * @type {any[]}
	 */
	$: cur_version_ids = []
	/**
	 * @type {never[]}
	 */
	let ds_test;

	// @todo: read dataset ids & versions from list
	let ds_version_ids_endpoint = 'https://www.bexis.uni-jena.de/api/Dataset';


	datasets_result.subscribe((value) => {
		ds_test = value;
		console.log(typeof(ds_test))
	});

	onMount(async () =>  {
		console.log("qopiwrupoiwqr")
		datasets_result.useLocalStorage()
		// const result = await fetch_datasets()
		// datasets_result.set(result)

	});

	
	// fetch_datasets()

	// const datasets_data = fetch_datasets() // @todo: allow to change base url (instance API) default always https://www.bexis.uni-jena.de/


	// should work in 2.17 without token for DatasetVersionIdsInclude (currently only for datasets -> DatasetIdsInclude)
	let token = '';

	let headersList = {
		Accept: 'application/json',
		Authorization: 'Bearer ' + token,
		'Content-Type': 'application/json'
	};

	let bodyContent = '';

	let endpoint = 'https://www.bexis.uni-jena.de/api/MetadataStatistic';
	let host = 'https://www.bexis.uni-jena.de';
	let endpoint_metadata = 'https://www.bexis.uni-jena.de/api/Metadata/'
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

	

	async function fetch_datasets() {
		const response = await fetch(ds_version_ids_endpoint, {
			method: 'GET',
		});
		const data = await response.json();

		datasets_result.set(data)
		return data;
	}

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

	/**
	 * @param {any} dataset_id
	 * 
	 * https://www.bexis.uni-jena.de/api/Metadata/2
	 * https://www.bexis.uni-jena.de/api/Metadata/22206
	 */
	async function fetch_metadata(dataset_id) {
		console.log("Fetching metadata for dataset_id: ", dataset_id)
		const response = await fetch(endpoint_metadata + dataset_id, {
			method: 'GET',
			headers: headersList
		});
		// console.log(response)
		const data = await response.json();


		return data;
	}

	/**
	 * @param {{ [x: string]: any; }} structure
	 * @param {number} n
	 * @param {any[]} firstkeys
	 */
	function search_content_keys(structure, n, firstkeys) {
		let content_keys = []
		let counter = 0

		for (var key in structure) {
			let content = structure[key]
			if (key == "#text") {
				let helper = []

				// adding existing keys prior
				for (var subkey in firstkeys) {
					helper.push(firstkeys[subkey])
				}

				// adding current key '#text'
				helper.push(key)
				content_keys.push(helper)
			} else if (typeof(content) === 'object') {
				counter++
				// console.log("COUNTER: ", counter)
				// console.log("FIRSTKEYS: ", firstkeys, " CURRENTKEY: ", key)
				let key_helper = firstkeys.slice()
				key_helper.push(key)
				// console.log("CALLING REC: ", key_helper)
				// console.log("CONTENT: ", content)
				let rec_result = search_content_keys(content, 3, key_helper)
				for (var recursive_key in rec_result) {
					content_keys.push(rec_result[recursive_key])
					// console.log("PUshing rec key: ", rec_result[recursive_key])
				}
			}
		}

		return content_keys
	}


	/**
	 * @param {string[]} a1
	 * @param {string[]} a2
	 */
	function compare_string_arrays(a1, a2) {
		if (a1.length != a2.length) {
			return false
		}

		for (var i=0; i < a1.length; i++) {
			if (a1[i] != a2[i]) {
				return false
			}
		}

		return true
	}

	/**
	 * @param {string | any[]} data
	 */
	function restructure_all_metadata(data) {
		let cropped_data = data[0]
		let structured_metadata = []
		let result = search_content_keys(cropped_data, 3, [])

		for (var x=1; x<data.length; x++) {
			let add_result = search_content_keys(data[x], 3, [])
			for (var y in add_result) {
				let exists = false
				for (var z in result) {
					// console.log("Add: ", add_result[y])
					// console.log("Original: ", result[z])
					// console.log("TRUTHY: ", compare_string_arrays(add_result[y], result[z]))
					if (compare_string_arrays(add_result[y], result[z])) {
						exists = true
					}
				}
				if (!exists) {
					// console.log("Adding: ", add_result[y])
					result.push(add_result[y])
				}
			}
		}

		if (result.length == 0) {
			return []
		}

		// extract values from content key fields

		// for every xpath in the result
		for (var i in result) {
			let row = []

			if (result[i][result[i].length-2].length <= 1) {
				row.push(result[i][result[i].length-4] + " " + result[i][result[i].length-2])
			}else{
				row.push(result[i][result[i].length-3])
			}

			for (var j = 0; j < data.length; j++) {
				let helper = data[j]
				version_id:
				for (var c in result[i]) {
					let current_key = result[i][c]
					console.log("Traversing key: ", current_key, " dataset: ", j)
					// append "@partyid" to content, if it exists
					let partyid_addon = ""
					if (current_key == "#text" && ("@partyid" in helper)) {
						partyid_addon = helper["@partyid"]
						helper = helper[current_key]
						helper += " (" + partyid_addon + ")"
					}else{
						helper = helper[current_key]
					}

					// undefined handling, delete later
					if (helper == undefined) {
						console.log("key not found in j: ", j)
						console.log(result[i])
						break version_id
					}
					
				}
				// console.log("j: ", j, " Content: ", helper)
				if (helper == undefined) {
					row.push("")
				} else {
					row.push(helper)
				}
			}

			if (row.length > 0){
				structured_metadata.push(row)
			}
		}

		return structured_metadata
	}

	/**
	 * @param {string} bg_col
	 * @param {string} text_col
	 * @param {string} value
	 */
	function build_diff_html_text(bg_col, text_col, value){
		return '<span style="background-color:' + bg_col
		+ '; color:' + text_col
		+ ';" class="s-y_bCXRrkrYfP">'
		+ value + '</span>'
	}

	/**
	 * @param {string} original_text
	 */
	function build_diff_html_cell(original_text, diff) {
		let testdiff = ""
		let testdiff_html = ""
		let changes_yet = false
		for (let i = 0; i < diff.length; i += 1) {
			testdiff += diff.at(i)["value"]
			if ("added" in diff.at(i)){
				if (diff.at(i)["added"] == true){
					changes_yet = true
					testdiff_html += build_diff_html_text(bg_color_added, text_color_added, diff.at(i)["value"])
				}
			}
			
			if ("removed" in diff.at(i)){
				if (diff.at(i)["removed"] == true){
					changes_yet = true
					testdiff_html += build_diff_html_text(bg_color_removed, text_color_removed, diff.at(i)["value"])
				}
			}

			if (!("removed" in diff.at(i) || "added" in diff.at(i))) {
				testdiff_html += '<span style="background-color: white;" class="s-y_bCXRrkrYfP">' + diff.at(i)["value"] + '</span>'
			}
		}
		if (changes_yet) {
			return html(original_text + "<br>" + testdiff_html)
		}
		else {
			return original_text
		}
	}

	/**
	 * @param {any[]} content
	 */
	function build_table_content(content) {
		tablecontent = []
		let row_count = content.length
		let col_count = content[0].length
		// console.log("CONTENT: \n", content)
		for (var r = 0; r<row_count; r++){
			let new_table_row = {"section": content[r][0]}
			for (var c = 1; c < content[r].length; c++) {
				let row_content = content[r][c]
				if (c > 1) {
					let diff = diffChars(content[r][c], content[r][1])
					// console.log("Comparing: \n", content[0][c][1], "\n", content[index][c][1])
					// console.log(diff)
					row_content = build_diff_html_cell(row_content, diff) 
				}
				new_table_row["col"+c] = row_content
			}
			// console.log(new_table_row)
			tablecontent.push(new_table_row)
		}
		tablecontent = tablecontent
	}

	async function calc_and_show_diff() {
		// fetch and push all dataset_ids into results
		let results = []

		console.log("Fetching metadata...")
		for (var i = 0; i < cur_dataset_ids.length; i++){
			let id = ds_test[cur_dataset_ids[i]]["Id"]
			let data = await fetch_metadata(id)
			results.push(data)
		}

		// restructure
		let structured_metadata = restructure_all_metadata(results)

		console.log(structured_metadata)

		// build table
		build_table_content(structured_metadata)

	}

	async function fetch_and_calc_original_schema() {
		let id = ds_test[cur_dataset_ids[0]]["Id"]
		console.log(id)
		let data = await fetch_metadata(id)

		let structured_metadata = restructure_all_metadata([data])
		console.log(structured_metadata)
	}

	function add_version_id() {

		cur_version_ids.push(ds_test[1]["Versions"][0]["Id"])
		cur_version_ids = cur_version_ids
	}

	function add_dataset_id() {
		cur_dataset_ids.push(1)
		cur_dataset_ids = cur_dataset_ids
		add_version_id()
		// console.log(cur_dataset_ids)
	}

	/**
	 * @param {number} i
	 */
	function changed_dataset(i) {
		console.log(cur_dataset_ids[i])
		console.log(ds_test[cur_dataset_ids[i]]["Versions"][0]["Id"])
		cur_version_ids[i] = ds_test[cur_dataset_ids[i]]["Versions"][0]["Id"]
		cur_version_ids = cur_version_ids
	}

	/**
	 * @param {number} i
	 */
	function delete_dataset(i) {
		console.log("Deleting dataset: ", i)
		cur_dataset_ids.splice(i, 1)
		cur_dataset_ids = cur_dataset_ids
		cur_version_ids.splice(i, 1)
		cur_version_ids = cur_version_ids
		drop_table_column(i+1)
		
	}

	/**
	 * @param {number} i
	 */
	function drop_table_column(i) {
		console.log(tablecontent)
		for (var x = 0; x < 20; x++) {
			if ("col"+i in tablecontent[0]) {
				break
			} else {
				i += 1
			}
		}

		for (var row_index in tablecontent){
			console.log("Deleting: ", tablecontent[row_index], "col"+i)
			delete tablecontent[row_index]["col"+i]
		}
		console.log("Deleting: ", tablecontent)
		tablecontent = tablecontent
	}
	// https://gridjs.io/docs/config/style
	const style = {
		table: {
      		border: '3px solid #ccc',
			'overflow-x': "scroll"
    	},
		'overflow-x': "scroll"
	}
</script>

<h1>test</h1>
<main>
	<div>
		<!-- Xpath: <input bind:value={xpath} />
		VersionID_1: <input bind:value={v_id_1} />
		VersionID_2: <input bind:value={v_id_2} />
		Token: <input bind:value={token} />
		URL: <input bind:value={host} /> -->
		<button on:click={calc_and_show_diff}>Show Diff</button>
		<button on:click={fetch_datasets}>fetch_datasets</button>
		<button on:click={add_dataset_id}>Add Dataset Id</button>
		<button on:click={fetch_and_calc_original_schema}>Fetch Original Schema</button>
	</div>

	{#if ds_test}
		{#each cur_dataset_ids as d_id, i}
			<label for={"ds_select_"+{i}}>Datased Id {i+1}:</label>
			<select id={"ds_select_"+{i}} bind:value={cur_dataset_ids[i]} on:change={() => changed_dataset(i)}>
				{#each ds_test as dataset, i}
					<option value={i}>{dataset["Id"]}</option>
				{/each}
			</select>
			{#if cur_version_ids.length >= i}
			<select id={"version_select_"+{i}} bind:value={cur_version_ids[i]}>
				{#each ds_test[cur_dataset_ids[i]]["Versions"] as version_id}
					<option>{version_id["Id"]}</option>
				{/each}
			</select>
			{/if}
			<button on:click={() => delete_dataset(i)}>-</button>
			<br>
		{/each}
<!-- 
		<label for={"ds1_select"}>Datased Id 1:</label>
		<select id={"ds1_select"} bind:value={cur_dataset_id1} on:change={update_version_dd}>
			{#each ds_test as dataset, i}
				<option value={i}>{dataset["Id"]}</option>
			{/each}
		</select>
		{#if version_ids1}
			<select>
				{#each version_ids1 as version_id}
					<option>{version_id["Id"]}</option>
				{/each}
			</select>
		{/if}

		<label for={"ds2_select"}>Datased Id 2:</label>
		<select id={"ds2_select"} bind:value={cur_dataset_id2} on:change={update_version_dd}>
			{#each ds_test as dataset, i}
				<option value={i}>{dataset["Id"]}</option>
			{/each}
		</select>
		{#if version_ids2}
			<select>
				{#each version_ids2 as version_id}
					<option>{version_id["Id"]}</option>
				{/each}
			</select>
		{/if} -->
		
	{/if}

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
	{#if tablecontent}	
		<Grid data={tablecontent} style={style} />
	{/if}

	
</main>

<style global>
	@import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>




<!-- 		
		// data1 = await fetch_data(build_bodyContent(v_id_1));
		// for (let key in data1) {
		// 	result1 = [...result1, { id: key, value: data1[key].data }];
		// }

		// data2 = await fetch_data(build_bodyContent(v_id_2));
		// for (let key in data2) {
		// 	result2 = [...result2, { id: key, value: data2[key].data }];
		// }

		// console.log("\n Raw data from fetch_data():")
		// console.log(data1)
		// console.log(data2)

		// diff = diffChars(result1[0].id, result2[0].id);
		// console.log("\n diff function return value: ")
		// console.log(diff);
	

			/**
	 * @param {any} v_id
	 */
	function build_bodyContent(v_id) {
		headersList = {
			Accept: '*/*',
			Authorization: 'Bearer ' + token,
			'Content-Type': 'application/json'
		};
		
		bodyContent = JSON.stringify({
			Xpath: xpath,
			DatasetVersionIdsInclude: ['' + v_id + '']
		});
		
		return bodyContent
	}
 -->