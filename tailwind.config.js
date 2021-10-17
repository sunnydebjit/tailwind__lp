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
			animation: {
				blob: 'grow 7s infinite',
			},
			keyframes: {
				grow: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, 50px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)',
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
