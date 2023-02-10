import { writable } from 'svelte/store';

const createLocalStore = (/** @type {string} */ key, /** @type {never[]} */ startValue) => {
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