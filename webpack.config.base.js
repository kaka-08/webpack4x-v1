const path = require('path');

module.exports = {
    entry: {
        // 项目入口文件 编译从此开始
        main: "./index.js"
    },
    output: {
        //   项目输出文件 路径 + 文件名
        path: path.resolve(__dirname, "dev"), 
        filename: "[name].js", 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,   // .js/.jsx结尾的文件
                exclude: /node_modules/,  // 不包含 ‘node_modules’ 
                use: {
                    loader: "babel-loader"  // babel 做 transform
                }
            }
        ]
    },
    stats: 'errors-only',
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js",".jsx"],
        alias: {
          "common": path.resolve(__dirname, "src/common")
        },
    },
    devtool: 'cheap-module-eval-source-map', 
    devServer: {},
    plugins: [
    ]
}