/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extend: {
			fontSize: {
				title: ["64px", "100%"],
			},
			colors: {
				"accent-blue": "#33A6BA",
			},
		},
	},
	plugins: [],
};
