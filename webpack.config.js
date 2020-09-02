const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bunlde.js',
        path: path.resolve(__dirname, 'dist')
    }
}
