// make_es6_libray.js
const fs = require('fs')
const util = require('util')
var exec = require('child_process').exec

function puts(error, stdout, stderr) { util.puts(stdout) }

console.log('copying: json-stringify-pretty-compact/index.js to lib/json-stringify-pretty-compact.js')
fs.copyFileSync('node_modules/json-stringify-pretty-compact/index.js', 'lib/json-stringify-pretty-compact.js')
console.log('converting to es6: cjs-to-es6 lib/json-stringify-pretty-compact.js')
exec('cjs-to-es6 lib/json-stringify-pretty-compact.js', puts)
