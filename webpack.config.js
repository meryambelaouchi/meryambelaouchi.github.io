const path = require('path');

module.exports = {
    entry: 'scripts.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js',
    },
    mode: 'production'
};