/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#3A5267',
				second: '#A9B2CA',
				third: '#BEBEBE'
			}
		}
	},
	plugins: []
};
