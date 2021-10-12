const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				orange: colors.orange,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
