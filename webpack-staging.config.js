const path = require('path');
const baseConfig = require('./webpack.config');

/* Override the development defaults */
module.exports = env => {

    const base = baseConfig(env);

    return {
        ...base,
        mode: 'production',
        output: {
            ...base.output,

            filename: 'index.js',
            path: path.resolve(__dirname, 'dist', 'staging'),
        }
    }
}
    
    
    
