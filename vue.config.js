
const path = require('path') // 自己添加的
module.exports = {
    publicPath:'./',
    lintOnSave: false, //如果为false，就是取消eslint规则的检查
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@globalStyle',path.join(__dirname,'./src/assets/global-style.less'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
      },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/global-style.less') // 自己添加的, less全局变量所在文件路径
            ]
        }
    }  
}