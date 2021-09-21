/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-08-22 15:29:15
 */

const { getOptions } = require('loader-utils')

module.exports = function(source) {
    const options = getOptions(this)

    console.log('opt is ', options)
    console.log('source is ', source)

    return 123
}
