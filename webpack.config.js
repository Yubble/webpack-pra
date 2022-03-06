/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-08-22 15:06:47
 **/
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bunlde.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[contenthash]'
    }
}
