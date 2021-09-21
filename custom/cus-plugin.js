/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-08-22 16:45:48
 **/

class BasicPlugin {
    constructor(opt) {
        console.log('opt is ', opt)
    }

    apply(compiler) {
        console.log('------ compiler -------', compiler)
        compiler.plugin('compilation', compilation => {
            console.log('-------- 监听到 --------')
        })
        console.log('插件选项为：', compiler.options)
    }
}

module.exports = BasicPlugin
