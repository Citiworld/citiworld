const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {
			fontFamily: {
				primary: 'var(--font-primary)',
				secondary: 'var(--font-secondary)',
			},
			colors: {
				primary: {
					50: '#eef7ff',
					100: '#dcf0ff',
					200: '#b2e2ff',
					300: '#6dccff',
					400: '#20b2ff',
					500: '#0098ff',
					600: '#0078df',
					700: '#005fb4',
					800: '#005195',
					900: '#00427a',
					950: '#001a33',
				},
				secondary: {
					50: '#ebf3ff',
					100: '#daeaff',
					200: '#bcd6ff',
					300: '#94bbff',
					400: '#6a92ff',
					500: '#476aff',
					600: '#273fff',
					700: '#1b2de7',
					800: '#192aba',
					900: '#1f2f98',
					950: '#121954',
				},
				accent: {
					50: '#f2f9fd',
					100: '#e4f0fa',
					200: '#c4e2f3',
					300: '#8fcaea',
					400: '#53aedd',
					500: '#2c90c4',
					600: '#1e77ab',
					700: '#1a5e8a',
					800: '#195173',
					900: '#1a4460',
					950: '#112c40',
				},
				highlight: {
					50: '#f0f8ff',
					100: '#e0effe',
					200: '#b9e0fe',
					300: '#7cc9fd',
					400: '#2eaafa',
					500: '#0c93eb',
					600: '#0074c9',
					700: '#015ca3',
					800: '#064e86',
					900: '#0b426f',
					950: '#07294a',
				}
			},
			screens: {
				xs: '400px',
			},
			lineHeight: {
				'14': '3.5rem',
			},
			spacing: {
				'unset': 'unset',
				'1/2': '0.125rem',
				'17': '4.25rem',
				'18': '4.5rem',
				'75': '18.75rem',
				'92': '23rem',
			},
			outlineWidth: {
				'0.5': '0.5px',
			},
			outlineOffset: {
				'3': '3px',
			},
			zIndex: {
				'1': '1',
				'5': '5',
			},
			borderRadius: {
				'inherit': 'inherit',
			},
			minHeight: {
				'screen': 'calc(100vh - 67.2px)'
			}
		},
	},
	plugins: [
		addDynamicIconSelectors({ prefix: 'i' }),
	]
}
