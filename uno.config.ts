import {
	defineConfig,
	presetIcons,
	presetWind
} from 'unocss'

export default defineConfig({
	presets: [
		presetWind(),
		presetIcons({
			collections: {
				'material-symbols': () => import('@iconify-json/material-symbols/icons.json').then(i => i.default) as any
			},
			customizations: {
				iconCustomizer(collection, icon, props) {
					if (collection === 'material-symbols' && icon === 'arrow-forward-rounded') {
						props.width = '1.2em'
						props.height = '1.2em'
					}
				}
			},
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle',
			},
		}),
	],
	rules: [
		['font-primary', { 'font-family': 'var(--font-primary)' }],
		['font-secondary', { 'font-family': 'var(--font-secondary)' }],
		[/^min-h-screen\/(\d+)/, match => ({ 'min-height': `calc(${100 / parseInt(match[1])}vh - 67.2px)` })],
	],
	theme: {
		breakpoints: {
			xs: '400px',
			sm: '640px',
			md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
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
	}
})
