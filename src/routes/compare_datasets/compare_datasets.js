/**
 * @param {string | any[]} data
 */
export function restructure_all_metadata(data) {
	let cropped_data = data[0];
	let structured_metadata = [];
	let result = search_content_keys(cropped_data, 3, []);

	for (var x = 1; x < data.length; x++) {
		let add_result = search_content_keys(data[x], 3, []);
		for (var y in add_result) {
			let exists = false;
			for (var z in result) {
				// console.log("Add: ", add_result[y])
				// console.log("Original: ", result[z])
				// console.log("TRUTHY: ", compare_string_arrays(add_result[y], result[z]))
				if (compare_string_arrays(add_result[y], result[z])) {
					exists = true;
				}
			}
			if (!exists) {
				// console.log("Adding: ", add_result[y])
				result.push(add_result[y]);
			}
		}
	}

	if (result.length == 0) {
		return [];
	}

	// extract values from content key fields

	// for every xpath in the result
	for (var i in result) {
		let row = [];

		if (result[i][result[i].length - 2].length <= 1) {
			row.push(result[i][result[i].length - 4] + ' ' + result[i][result[i].length - 2]);
		} else {
			row.push(result[i][result[i].length - 3]);
		}

		for (var j = 0; j < data.length; j++) {
			let helper = data[j];
			version_id: for (var c in result[i]) {
				let current_key = result[i][c];
				console.log('Traversing key: ', current_key, ' dataset: ', j);
				// append "@partyid" to content, if it exists
				let partyid_addon = '';
				if (current_key == '#text' && '@partyid' in helper) {
					partyid_addon = helper['@partyid'];
					helper = helper[current_key];
					helper += ' (' + partyid_addon + ')';
				} else {
					helper = helper[current_key];
				}

				// undefined handling, delete later
				if (helper == undefined) {
					console.log('key not found in j: ', j);
					console.log(result[i]);
					break version_id;
				}
			}
			// console.log("j: ", j, " Content: ", helper)
			if (helper == undefined) {
				row.push('');
			} else {
				row.push(helper);
			}
		}

		if (row.length > 0) {
			structured_metadata.push(row);
		}
	}

	return structured_metadata;
}

/**
 * @param {{ [x: string]: any; }} structure
 * @param {number} n
 * @param {any[]} firstkeys
 * @returns {any[]}
 */
function search_content_keys(structure, n, firstkeys) {
	let content_keys = [];
	//let counter = 0;

	for (var key in structure) {
		let content = structure[key];
		if (key == '#text') {
			let helper = [];

			// adding existing keys prior
			for (var subkey in firstkeys) {
				helper.push(firstkeys[subkey]);
			}

			// adding current key '#text'
			helper.push(key);
			content_keys.push(helper);
		} else if (typeof content === 'object') {
			//counter++;
			// console.log("COUNTER: ", counter)
			// console.log("FIRSTKEYS: ", firstkeys, " CURRENTKEY: ", key)
			let key_helper = firstkeys.slice();
			key_helper.push(key);
			// console.log("CALLING REC: ", key_helper)
			// console.log("CONTENT: ", content)
			let rec_result = search_content_keys(content, 3, key_helper);
			for (var recursive_key in rec_result) {
				content_keys.push(rec_result[recursive_key]);
				// console.log("PUshing rec key: ", rec_result[recursive_key])
			}
		}
	}

	return content_keys;
}

/**
 * @param {string[]} a1
 * @param {string[]} a2
 */
function compare_string_arrays(a1, a2) {
	if (a1.length != a2.length) {
		return false;
	}

	for (var i = 0; i < a1.length; i++) {
		if (a1[i] != a2[i]) {
			return false;
		}
	}

	return true;
}
