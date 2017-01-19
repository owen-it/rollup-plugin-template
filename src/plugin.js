import { createFilter } from 'rollup-pluginutils';
import { minify } from 'html-minifier';

var assign = Object.assign;

class Template 
{  
    constructor() {}
    
    filter(id)
    {
        return createFilter(
            this.include || '*.html', this.exclude
        )(id);
    }
    
    transform(code, id)
    {
        if(this.filter(id)){
            return {
                code: `export default ${this.stringify(code)}`,
                map: { mappings: '' }
            }
        }
    }
    
    stringify(code)
    {
        return JSON.stringify(minify(
            code, {}
        ));    
    }
}

export default function(options = {}){
    var plugin = new Template();
    
    return assign(plugin, { name: 'template' }, options);
};
