# rollup-plugin-template [![npm package](https://img.shields.io/npm/v/rollup-plugin-template.svg)](https://www.npmjs.com/package/rollup-plugin-template)

Rollup plugin for import template HTML.

## Installation

```bash
npm install --save-dev rollup-plugin-template
```

## Usage

```js
import { rollup } from 'rollup';
import template from 'rollup-plugin-template';

rollup({
	entry: 'src/app.js',
	plugins: [
		template({
			include: 'src/templates/*.html'
		})
	]
});
```

## License

[MIT](LICENSE.md)
