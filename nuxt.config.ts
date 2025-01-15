import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	runtimeConfig: {
		public: {
			API_PROD: process.env.API_PRODUCTION_URL,
			API_DEV: process.env.API_DEVELOPMENT_URL
		}
	},
	build: {
		transpile: ['vuetify']
	},
	modules: [
		'@nuxtjs/tailwindcss',
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', config => {
				config.plugins?.push(vuetify({ autoImport: true }))
			})
		}
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls
			}
		}
	}
})
