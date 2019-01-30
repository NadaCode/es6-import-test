/* ---------------------------------------------------------------------------------------------
 * es6_test.js: json formatting and es6 rollup test
 *-------------------------------------------------------------------------------------------- */

// import { testLibFunction } from './es6_test_lib.js'

// const stringify = require('./node_modules/json-stringify-pretty-compact/index.js') // does not work in browsers

// Feature detect dynamic import().
function supportsDynamicImport() {
	try {
		new Function('import("")');
		return true;
	} catch (err) {
		return false;
	}
}

// import jsonObj from './test.json' // you need Rollup for this
const jsonObj = {
	name: 'test.json',
	"table": [{
		"record_type": [""],
		"table": "person"
	}],
	parameter: {
		"user_id": ""
	},
	field: ["per.json_data"],
	query: [
		["per.login_id", "=", "user_id"]
	],
	short_array: [1, 2, 3, 6, 7, 8],
	obj: {
		a: 123,
		long_array: [1, 2, 3, 6, 7, 8, 'asdasdas', 6, 7, 8, 'asdasdas', 'werwerwe', 'werwerweasdasdas'],
	},
}

function testDynamic(json) {
	import('./es6_test_lib.js').then((module) => {
		module.testLibFunction(json)
	}).catch((err) => {
		alert(`dynamic import failed with error: ${err}`)
	})
}

testDynamic(jsonObj)
