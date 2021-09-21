/*
 * @Name: 
 * @Description: 构建文件时，将所有生成的文件名放到fileList.md中
 * @Author: 刘燕保
 * @Date: 2021-09-05 21:36:38
 */

function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
        var filelist = 'In this build:\n\n';
        for (var filename in compilation.assets) {
            filelist += ('- ' + filename + '\n')
        }
        compilation.assets['filelist.md'] = {
            source() {
                return filelist;
            },
            size() {
                return filelist.length;
            }
        }
        callback()
    })
}

module.exports = FileListPlugin
