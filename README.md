# Test ES6 with Rollup

## Motivation

I'm tired oh spending months of my time trying to understand and fix all webpack errors. I do not like when there is a very complex system of build tools that is extremely hard to understand. I also do not like extra bloat and I want my code to use native browser calls to test real es6+ performance instead of polyfill/transpiled performance.

## Project

This is minimal project to test how to use modern javascript in Node and browsers without any polyfills or transpiling. It also shows how good and easy to understand Rollup is, see rollup.config.js.

Open browser dev tools to see the code. Modern browsers use es6_test.js directly and Node + older browsers use bundle.js. See <https://jakearchibald.com/2017/es-modules-in-browsers/>.
Idea is to show **how simple and clean bundle.js** is. It has nothing extra, no webpack bloat.

File index.html is using directly es6_test.js with fallback to bundle.js for old browsers. File index.html uses only bundle.js.

Node does not support import by default so it uses bundle.js, run ```yarn test:node```.

## Help needed

Need to add minimal prettier and eslint for lintig and jest for testing.

## Install and test

Clone this repo first.

```bash
cd test_es6_rollup
yarn
yarn test:node
```

### Webserver

I recommend lite-server (or any webserver) for serving the directory because all browsers don't want to run javascript from files opened from filesystem. Only Firefox (63.0) works when opening index.html directly to browser.


## CommonJS to ES6 export

Problem is that modern browsers do not support require -syntax at all and many libraries use only old cjs module.exports. Call ```yarn build:lib``` to create es6 version of that library (alredy done in repo). yarn build:lib needs to have cjs-to-es6 installed, add it using: ```yarn global add cjs-to-es6```.

## Test Rollup json import

If you want to test Rollup json import then change es6_test.js to:
```js
import jsonObj from './test.json' // you need Rollup for this
/* const jsonObj = {
	name: 'test.json',
	short_array: [1, 2, 3, 6, 7, 8],
	obj: {
		a: 123,
		long_array: [1, 2, 3, 6, 7, 8, 'asdasdas', 6, 7, 8, 'asdasdas', 'werwerwe', 'werwerweasdasdas'],
	},
} */
```

Then run ```yarn build```. Now you have to open <http://localhost:3000/index_old.html> (to load bundle.js) because browsers do not support importing json.
