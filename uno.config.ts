import {
	defineConfig,
	presetIcons,
	presetWind
} from 'unocss'

export default defineConfig({
	presets: [
		presetWind(),
		presetIcons({
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle',
			},
		}),
	],
	rules: [
		['font-primary', { 'font-family': 'var(--font-primary)' }],
		['font-secondary', { 'font-family': 'var(--font-secondary)' }]
	],
	theme: {
		colors: {
			primary: {
				100: '#CCD1D6',
				200: '#99A3AD',
				300: '#667685',
				400: '#33485C',
				500: '#001A33',
			},
			secondary: {
				100: '#D2D5EA',
				200: '#A5ACD6',
				300: '#7982C1',
				400: '#4C59AD',
				500: '#1F2F98',
			},
			accent: {
				100: '#D5E9F3',
				200: '#ABD3E7',
				300: '#80BCDC',
				400: '#56A6D0',
				500: '#2C90C4',
			},
			hightlight: {
				100: '#D5EEFE',
				200: '#ABDDFD',
				300: '#82CCFC',
				400: '#58BBFB',
				500: '#2EAAFA',
			},
		},
	}
})
