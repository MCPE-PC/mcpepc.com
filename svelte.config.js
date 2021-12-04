import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			enabled: false,
		},
		ssr: false,
		target: '#svelte',
		vite: {
			optimizeDeps: {
				entries: [],
			},
		},
	},
};

export default config;
