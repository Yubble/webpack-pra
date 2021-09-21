/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-20 22:55:37
 **/
const Compiler = require('./webpack')

class MyPlugin {
    apply(compiler) {
        compiler.hook.run.tap('MyPlugin', compiler => {
            console.log('开始编译...', compiler)
        })
        compiler.hook.compiler.tap('MyPlugin', (name, age) => {
            setTimeout(() => {
                console.log('编译中...', name)
            }, 1000)
        })
    }
}

const myPlugin = new MyPlugin()

const options = {
    plugins: [myPlugin]
}

let compiler = new Compiler(options)
compiler.run()
