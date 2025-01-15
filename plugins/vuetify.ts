import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const myCustomLightTheme: ThemeDefinition = {
	dark: false,
	colors: {
		primary: '#426834',
		'on-primary': '#FEFEFE',
		secondary: '#54624D',
		'on-secondary': '#FFFFFF',
		tertiary: '#386667',
		'on-tertiary': '#FFFFFF',
		background: '#F8FAF0',
		'on-background': '#191D17',
		surface: '#F8FAF0',
		'on-surface': '#426834',
		error: '#BA1A1A',
		'on-error': '#FFFFFF'
	}
}

export default defineNuxtPlugin(app => {
	const vuetify = createVuetify({
		ssr: true,
		blueprint: md3,
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				mdi
			}
		},
		theme: {
			defaultTheme: 'myCustomLightTheme',
			themes: { myCustomLightTheme }
		}
	})
	app.vueApp.use(vuetify)
})
