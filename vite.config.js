import { resolve } from 'path'
import posthtml from '@vituum/vite-plugin-posthtml'
import { defineConfig } from 'vite'

export default defineConfig({
	root: resolve(__dirname, 'src'),
	appType: 'mpa',
	build: {
		outDir: '../dist',
		rollupOptions: {
			input: {
				main: resolve(__dirname, "src/index.html"),
				projects: resolve(__dirname, "src/projects.html"),
				contact: resolve(__dirname, "src/contact.html"),
				aboutme: resolve(__dirname, "src/aboutme.html"),
				"aboutme/cars": resolve(__dirname, "src/aboutme/cars.html"),
				"projects/aue-py": resolve(__dirname, "src/projects/aue-py.html"),
				"projects/not-ddg-bangs": resolve(__dirname, "src/projects/not-ddg-bangs.html"),
			}
		}
	},
	server: {
		port: 8080
	},
	plugins: [
		posthtml()
	],
})