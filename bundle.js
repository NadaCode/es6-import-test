(function () {
	'use strict';

	/* ---------------------------------------------------------------------------------------------
	 * es6_test_lib.js: json formatting and es6 rollup test
	 *-------------------------------------------------------------------------------------------- */

	// https://github.com/lydell/json-stringify-pretty-compact

	const testStringifyPrettyCompact = (json, stringify) => {
		let options = { maxLength: 80, indent: 2, };
		return stringify(json, options)
	};

	function test (json, stringify) {
		const isNode = typeof window === 'undefined';
		let jsonTxt = JSON.stringify(json);
		console.log('jsonTxt:', jsonTxt);
		let formattedJson = testStringifyPrettyCompact(json, stringify);
		console.log('jsonTxt formatted compact:', formattedJson);
		if (isNode === false) {
			const elem1 = document.getElementById('json');
			if (!elem1) console.error("json test: document.getElementById('json') failed");
			else {
				elem1.innerHTML = jsonTxt;
				const elem2 = document.getElementById('formattedJson');
				elem2.innerHTML = formattedJson;
			}
		}
	}

	function stringify (obj, options) {
	  options = options || {};
	  var indent = JSON.stringify([1], null, get(options, 'indent', 2)).slice(2, -3);
	  var addMargin = get(options, 'margins', false);
	  var maxLength = (indent === '' ? Infinity : get(options, 'maxLength', 80));

	  return (function _stringify (obj, currentIndent, reserved) {
	    if (obj && typeof obj.toJSON === 'function') {
	      obj = obj.toJSON();
	    }

	    var string = JSON.stringify(obj);

	    if (string === undefined) {
	      return string
	    }

	    var length = maxLength - currentIndent.length - reserved;

	    if (string.length <= length) {
	      var prettified = prettify(string, addMargin);
	      if (prettified.length <= length) {
	        return prettified
	      }
	    }

	    if (typeof obj === 'object' && obj !== null) {
	      var nextIndent = currentIndent + indent;
	      var items = [];
	      var delimiters;
	      var comma = function (array, index) {
	        return (index === array.length - 1 ? 0 : 1)
	      };

	      if (Array.isArray(obj)) {
	        for (var index = 0; index < obj.length; index++) {
	          items.push(
	            _stringify(obj[index], nextIndent, comma(obj, index)) || 'null'
	          );
	        }
	        delimiters = '[]';
	      } else {
	        Object.keys(obj).forEach(function (key, index, array) {
	          var keyPart = JSON.stringify(key) + ': ';
	          var value = _stringify(obj[key], nextIndent,
	                                 keyPart.length + comma(array, index));
	          if (value !== undefined) {
	            items.push(keyPart + value);
	          }
	        });
	        delimiters = '{}';
	      }

	      if (items.length > 0) {
	        return [
	          delimiters[0],
	          indent + items.join(',\n' + nextIndent),
	          delimiters[1]
	        ].join('\n' + currentIndent)
	      }
	    }

	    return string
	  }(obj, '', 0))
	}

	// Note: This regex matches even invalid JSON strings, but since we’re
	// working on the output of `JSON.stringify` we know that only valid strings
	// are present (unless the user supplied a weird `options.indent` but in
	// that case we don’t care since the output would be invalid anyway).
	var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,\][}{]/g;

	function prettify (string, addMargin) {
	  var m = addMargin ? ' ' : '';
	  var tokens = {
	    '{': '{' + m,
	    '[': '[' + m,
	    '}': m + '}',
	    ']': m + ']',
	    ',': ', ',
	    ':': ': '
	  };
	  return string.replace(stringOrChar, function (match, string) {
	    return string ? match : tokens[match]
	  })
	}

	function get (options, name, defaultValue) {
	  return (name in options ? options[name] : defaultValue)
	}

	/* ---------------------------------------------------------------------------------------------
	 * es6_test.js: json formatting and es6 rollup test
	 *-------------------------------------------------------------------------------------------- */
	// const stringify = require('./node_modules/json-stringify-pretty-compact/index.js') // does not work in browsers

	// import jsonObj from './test.json' // you need Rollup for this
	const jsonObj = {
		name: 'test.json',
		short_array: [1, 2, 3, 6, 7, 8],
		obj: {
			a: 123,
			long_array: [1, 2, 3, 6, 7, 8, 'asdasdas', 6, 7, 8, 'asdasdas', 'werwerwe', 'werwerweasdasdas'],
		},
	};

	debugger
	test(jsonObj, stringify);

}());
