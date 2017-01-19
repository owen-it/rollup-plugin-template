var assert = require('assert');
var { rollup } = require('rollup');
var template = require('../src/plugin.js');

process.chdir('test');

function bundle(options){
    options.plugins = [template()];
    
    return rollup(options);
}

describle('rollup-plugin-template', () => {
    
    it('Should import html tags from file', () => {
        
        return bundle({ entry: 'stubs/component.js' }).then(buble => {
            
            const { code } = bundle.generate({ format: 'iife', moduleName: 'tpl' });
            
            new Function('assert', code)(assert);
            
        })
        
    });
    
});