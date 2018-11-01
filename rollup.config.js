import path from 'path'
import json from 'rollup-plugin-json'
import filesize from 'rollup-plugin-filesize'
import visualizer from 'rollup-plugin-visualizer'
import { plugin as analyze } from 'rollup-plugin-analyzer'
// import prettier from 'rollup-plugin-prettier'
// import { eslint } from 'rollup-plugin-eslint'

// import nodeGlobals from 'rollup-plugin-node-globals'
// import buble from 'rollup-plugin-buble'
// import { terser } from 'rollup-plugin-terser' // es6 alternative to buble + rollup-plugin-uglify

// const isProduction = process.env.NODE_ENV === 'production'

let plugins = [
	// nodeGlobals(),
	json(),
	// prettier(),
	/* 	eslint({
		'linebreak-style': ['error', 'unix'],
		extensions: ['.js', '.vue'],
		cache: true,
		throwOnError: false,
		fix: true,
	}), */
	filesize({ showBrotliSize: true }),
	// terser({
	// 	ecma: 8,
	// 	output: {
	// 		comments: 'all'
	// 	}
	// }), // es6
	// buble({objectAssign: 'Object.assign'}), uglify(), // es6
	analyze(),
	visualizer({ filename: './stats.html', title: 'Test es6 Rollup' }),
]

export default {
	// experimentalCodeSplitting: true,
	// experimentalDynamicImport: true,
	// external: external,
	plugins: plugins,
	input: path.join(__dirname, 'es6_test.js'), // './es6_test.js',
	output: {
		file: path.join(__dirname, 'bundle.js'), // './bundle.js',
		format: 'iife', // iife, umd or cjs , all work for node
		// sourcemap: process.env.NODE_ENV !== 'prod',
		// globals: globals,
		name: 'Test es6 Rollup',
		moduleName: 'test_es6_rollup',
	},
}
