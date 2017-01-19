import buble from 'rollup-plugin-buble';

var pkg = require('./package.json');
var ext = Object.keys(pkg.dependencies);

export default {
	entry: 'src/plugin.js',
    external: ext.concat('path'),
	plugins: [buble()],
    	targets: [
		{
			format: 'cjs',
			dest: pkg['main']
		},
		{
			format: 'es',
			dest: pkg['jsnext:main']
		}
	]
};