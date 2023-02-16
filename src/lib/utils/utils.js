/**
 * @param {any} headersList
 * @param {string} url
 */
export async function get_version(headersList, url) {
	const response = await fetch(url + '/home/version', {
		method: 'GET',
		headers: headersList
	});
	// console.log(response)
	const data = await response.text();
	let position_216 = data.indexOf('2.16');
	let position_217 = data.indexOf('2.17');
	console.log(position_216, position_217);
	if (position_216 != -1) {
		return '2.16';
	}
	if (position_217 != -1) {
		return '2.17';
	}
	return '-1';
}

/**
 * @param {RequestInfo | URL} ds_version_ids_endpoint
 */
export async function fetch_datasets(ds_version_ids_endpoint) {
	console.log('Fetching initial datasets');
	const response = await fetch(ds_version_ids_endpoint, {
		method: 'GET'
	});
	const data = await response.json();

	data.sort( compare );

	return data;
}


function compare( a, b ) {
	if ( a.Id < b.Id ){
	  return -1;
	}
	if ( a.Id > b.Id ){
	  return 1;
	}
	return 0;
  }