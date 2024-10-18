import { resolve } from 'path'
import posthtml from '@vituum/vite-plugin-posthtml'

export default {
	root: resolve(__dirname, 'src'),
	build: {
		outDir: '../dist'
	},
	server: {
		port: 8080
	},
	plugins: [
		posthtml()
	]
}