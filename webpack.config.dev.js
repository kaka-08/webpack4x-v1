const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//分离css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const buildEnv = "development";

// 需要清楚的路径
const pathsToClean = [
    'dist',
    'build',
    'dev'
  ]
   
// the clean options to use
const cleanOptions ={}

config.mode = buildEnv;

config.module.rules.push({
  test: /\.(sa|sc|c)ss$/, // 匹配.css .scss .sass 
  use: [
    'style-loader',  // Adds CSS to the DOM by injecting a <style> tag 都看得懂的哈
    {
      loader: 'css-loader', // interprets @import and url() like import/require() and will resolve them. 
      options: {
        modules: true  // 这里特地添加css-modules 来避免css重名 
      },
    },
    'sass-loader'
  ]
})

config.devtool = 'cheap-module-eval-source-map';

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

config.plugins.push(new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
}),

new webpack.HotModuleReplacementPlugin(),
new CleanWebpackPlugin(pathsToClean, cleanOptions),
new HtmlWebpackPlugin({
    title:'Hello Webpack',
    filename: 'index.html',
    template: 'index.html',
    hash: false,
    minify:{
        minifyJS: true
    }
}));


module.exports = config;