/*
 * @Name: 
 * @Description: 用来测试webpack插件能力
 * @Author: 刘燕保
 * @Date: 2021-09-05 21:49:39
 */

const path = require('path')
const collectFileName = require('./example/collectFileName')
const compilerNotify = require('./example/compilerNotify')

module.exports = {
    entry: './custom/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'example/dist')
    },
    plugins: [
        new collectFileName(),
        new compilerNotify()
    ]
}