/* ---------------------------------------------------------------------------------------------
 * es6_test.js: json formatting and es6 rollup test
 *-------------------------------------------------------------------------------------------- */

import { test } from './es6_test_lib.js'
import stringify from './lib/json-stringify-pretty-compact.js'
// const stringify = require('./node_modules/json-stringify-pretty-compact/index.js') // does not work in browsers

// import jsonObj from './test.json' // you need Rollup for this
const jsonObj = {
	name: 'test.json',
	short_array: [1, 2, 3, 6, 7, 8],
	obj: {
		a: 123,
		long_array: [1, 2, 3, 6, 7, 8, 'asdasdas', 6, 7, 8, 'asdasdas', 'werwerwe', 'werwerweasdasdas'],
	},
}

debugger
test(jsonObj, stringify)
