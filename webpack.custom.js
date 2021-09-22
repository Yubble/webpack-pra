/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-08-22 15:46:30
 **/

const path = require('path')
const basicPlugin = require('./custom/cus-plugin')
const cyclePlugin = require('./custom/cus-plugin-cycle')
const exPlugin = require('./custom/cus-plugin-ex')

module.exports = {
    entry: './custom/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'custom/dist')
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             use: [{
    //                 loader: path.resolve('./custom/cus-loader'),
    //                 options: {
    //                     words: 'www'
    //                 }
    //             }]
    //         }
    //     ]
    // },
    plugins: [
        // new basicPlugin({
        //     name: 'Yubble',
        //     age: 19
        // }),
        // new cyclePlugin(),
        new exPlugin()
    ]
}
