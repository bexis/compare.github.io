import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			ssr: true
			//	strict: false
		}),
		paths: {
			//base: process.env.NODE_ENV === 'production' ? '/planthub' : ''
			base: process.env.NODE_ENV === 'production' ? '/compare.github.io' : ''
		},
		alias: {
			// $docs: path.resolve('./src/docs')
		},
		// Consult https://github.com/sveltejs/svelte-preprocess
		// for more information about preprocessors

		// Build throws error for all links pointing to the backend. Therefor we need to exclude for checking the link during build.
		prerender: {
			handleHttpError: ({ status, path, referrer, referenceType }) => {
				if (path.startsWith('/backend/') || path.startsWith('/images/') || path == '/') {
					//do nothing as it links to backend
				} else {
					throw new Error(
						path +
							' Missing link.' +
							`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`
					);
				}
				console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
			}
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};
