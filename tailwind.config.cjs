/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,html,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Noto Sans KR"', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')({strategy: 'class'})],
};
