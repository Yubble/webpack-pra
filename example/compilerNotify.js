/*
 * @Name: 
 * @Description: 构建完成后代码通知
 * @Author: 刘燕保
 * @Date: 2021-09-05 22:24:17
 */

class Notifier {
    apply(compiler) {
        compiler.plugin("done", stats => {
            const pkg = require("../package.json")
            const notifier = require("node-notifier")
            const time = ((stats.endTime - stats.startTime) / 1000).toFixed(2)

            notifier.notify({
                title: pkg.name,
                message: `WebPack is done!\n${stats.compilation.errors.length} errors in ${time}s`,
                contentImage: "https://www.baidu.com/img/flexible/logo/pc/result@2.png"
            })
        })
    }
}

module.exports = Notifier
