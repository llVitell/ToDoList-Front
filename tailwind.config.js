/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
		'./features/**/*.{vue,ts}',
		'./layouts/**/*.{vue,ts}',
		'./pages/**/*.{vue,ts}',
		'./shared/**/*.{vue,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: []
}
