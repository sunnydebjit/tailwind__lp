const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				orange: colors.orange,
				lime: colors.lime,
				trueGray: colors.trueGray,
				blueGray: colors.blueGray,
				coolGray: colors.coolGray,
				emerald: colors.emerald,
				cyan: colors.cyan,
				sky: colors.sky,
				violet: colors.violet,
				rose: colors.rose,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
