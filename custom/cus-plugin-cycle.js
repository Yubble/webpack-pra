/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-08-22 17:38:35
 */

class WebpackLifeCyclePlugin {
    constructor(opts) {}

    apply(compiler) {
        let MyPlugin = 'WebpackLifeCyclePlugin'

        compiler.hooks.entryOption.tap(MyPlugin, (ctx, entry) => {
            console.log('<========= entry.opt =========>')
            console.log('----- ctx is -----', ctx)
            console.log('------- entry is -------', entry)
        })

        compiler.hooks.watchRun.tapAsync(MyPlugin, (watching, callback) => {
            console.log('<========= watch run =========>')
            console.log('------ watching is ------', watching)
        })

        compiler.hooks.afterCompile.tap(MyPlugin, stats => {
            console.log('<========= afterCompile =========>')
            // console.log('------- stats is -------', stats)
        })

        compiler.hooks.emit.tapAsync(MyPlugin, (compilation, callback) => {
            console.log('<========= emit =========>')
            // console.log('------- compilation -------', compilation)
            callback()
        })

        compiler.hooks.done.tap(MyPlugin, stats => {
            console.log('<========= done =========>')
            // console.log('----- stats is -----', stats)
        })
    }
}

module.exports = WebpackLifeCyclePlugin
