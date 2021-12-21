import adapter from '@sveltejs/adapter-cloudflare';
import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';

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
			css: {
				postcss: {
					plugins: [
						autoprefixer,
						tailwindcss({
							content: ['./src/**/*.{svelte,html,ts}'],
							theme: {
								extend: {},
							},
							plugins: [],
						}),
					],
				},
			},
			optimizeDeps: {
				entries: [],
			},
		},
	},
};

export default config;
