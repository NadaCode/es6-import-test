/* ---------------------------------------------------------------------------------------------
 * es6_test.js: json formatting and es6 rollup test
 *-------------------------------------------------------------------------------------------- */

// import { test } from './es6_test_lib.js'
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

const testStringifyPrettyCompact = (json, stringify) => {
	let options = { maxLength: 80, indent: 2, }
	return stringify(json, options)
}

export function test (json, stringify) {
	const isNode = typeof window === 'undefined'
	let jsonTxt = JSON.stringify(json)
	console.log('jsonTxt:', jsonTxt)
	let formattedJson = testStringifyPrettyCompact(json, stringify)
	console.log('jsonTxt formatted compact:', formattedJson)
	debugger
	if (isNode === false) {
		const elem1 = document.getElementById('json')
		if (!elem1) console.error("json test: document.getElementById('json') failed")
		else {
			elem1.innerHTML = jsonTxt
			const elem2 = document.getElementById('formattedJson')
			elem2.innerHTML = formattedJson
		}
	}
}

test(jsonObj, stringify)
