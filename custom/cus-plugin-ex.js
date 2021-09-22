/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-08-22 19:21:22
 **/

class myPluginEx {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('MyWebpackPlugin', (compilation, callback) => {
            console.log('------ assets ------', compilation.assets)
            console.log('------ source ------', compilation.source)
            const manifest = {}
            for (const name of Object.keys(compilation.assets)) {
                manifest[name] = compilation.assets[name].size()
            }
            compilation.assets['manifest.json'] = {
                source() {
                    return JSON.stringify(manifest);
                },
                size() {
                    return this.source().length;
                }
            };
            callback()
        })
    }
}

module.exports = myPluginEx