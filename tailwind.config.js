/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			white: '#FFFFFF',
			blue: '#1E213F',
			gray: '#E3E1E1',
			darkgray: '#D7E0FF',
			darkblue: '#161932',
			orange: '#F87070',
		},
		extend: {},
	},
	plugins: [],
};
