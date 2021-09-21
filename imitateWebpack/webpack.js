/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-20 22:46:42
 **/

const { AsyncSeriesHook, SyncHook } = require('tapable')

class Compiler {
    constructor(opt) {
        this.hook = {
            run: new AsyncSeriesHook(['compiler']),
            compiler: new SyncHook(['params'])
        }

        this.plugins = opt.plugins
        for (let p of this.plugins) {
            p.apply(this)
        }
    }
    run() {
        // 执行异步钩子
        this.hook.run.callAsync(this, err => {
            this.compiler()
        })
    }
    compiler() {
        // 执行同步钩子并传参
        this.hook.compiler.call('编译完成后吐出参数')
    }
}

module.exports = Compiler