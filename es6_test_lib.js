/* ---------------------------------------------------------------------------------------------
 * es6_test_lib.js: json formatting and es6 rollup test
 *-------------------------------------------------------------------------------------------- */

// https://github.com/lydell/json-stringify-pretty-compact

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
