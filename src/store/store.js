import { writable } from 'svelte/store';

const createLocalStore = (/** @type {string} */ key, /** @type {any[] | string } */ startValue) => {
	const { subscribe, set, update } = writable(startValue);

	return {
		subscribe,
		set,
		update,
		useLocalStorage: () => {
			const json = localStorage.getItem(key);
			if (json) {
				set(JSON.parse(json));
			}

			subscribe((current) => {
				localStorage.setItem(key, JSON.stringify(current));
			});
		}
	};
};

export const datasets_result = createLocalStore('datasets_result', []);
export const table_content = createLocalStore('table_content', []);
export const token = createLocalStore('token', '');
export const username = createLocalStore('username', "");
export const url = createLocalStore('url', "");
export const api_version = createLocalStore('api_version', "");
export const storeCurrentUrl = writable();