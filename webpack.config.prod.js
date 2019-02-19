const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//分离打包js.map css 
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const buildEnv = "production";

// 需要清除的路径 本项目为dev
const pathsToClean = [
    'dist',
    'build',
    'dev'
  ]
   
// the clean options to use
const cleanOptions ={}

config.mode = buildEnv;

config.module.rules.push({
  test: /\.css$/, 
  use: [MiniCssExtractPlugin.loader, 'css-loader']
},{
  test: /\.scss$/,  // .scss 
  use: [
    MiniCssExtractPlugin.loader,  // Adds CSS to the DOM by injecting a <style> tag 都看得懂的哈
    'css-loader', 
    'sass-loader'
  ]
})

config.devtool = 'cheap-module-source-map'; 

config.devServer = {
  proxy: { 
    '/api': 'http://127.0.0.1:3000'
  },
  contentBase: path.join(__dirname, 'dev'),
  compress: true,
  inline: true,
  hot: true,
  port: 9000
};

config.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
};

config.plugins.push(new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
}),
new webpack.HotModuleReplacementPlugin(),
new CleanWebpackPlugin(pathsToClean, cleanOptions),
new HtmlWebpackPlugin({
    title:'Hello Webpack Product',
    filename: 'index.html',
    template: 'index.html',
    hash: true,
    minify:{
        minifyJS: true
    }
}));


module.exports = config;