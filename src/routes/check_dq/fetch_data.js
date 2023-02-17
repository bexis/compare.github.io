/**
 * @param {string} endpoint
 * @param {string | number} id
 * @param {string} token
 */
export async function getData(endpoint, id, token) {
	let headersList = {
		Accept: 'application/json',
		Authorization: 'Bearer ' + token,
		'Content-Type': 'application/json'
	};

	const response = await fetch(endpoint + '/' + id, {
		method: 'GET',
		headers: headersList
	});
    // workaround for: != 23 = Bearer token not exist.
	if (response.status == 200 && Number(response.headers.get('content-length')) > 0 && Number(response.headers.get('content-length')) != 23) {
		try {
			return response.json();
		} catch {
			return false;
		}
	} else {
		return false;
	}
}
