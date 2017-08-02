const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackConfig = require('webpack-config')
const config = require('../config')

function getCssLoader() {
  if (process.env.NODE_ENV === 'production') {
    return ExtractTextPlugin.extract({
      use: [
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    })
  }
  return [
    'style-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ]
}

module.exports = new WebpackConfig.Config().merge({
  devtool: true,
  entry: {
    app: ['./src/js/main.js'],
    style: ['./src/css/application.sass'],
  },
  output: {
    path: config.assetBuildPath,
    publicPath: '',
    filename: '[name].js?[hash:7]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(c|s[ac])ss$/,
        use: getCssLoader(),
      },
      {
        test: /img\/.*\.(png|jpg|jpeg|gif|svg)(\?[a-z0-9-]+)?$/,
        loader: 'file-loader?name=[path][name]-[hash:7].[ext]',
      },
      {
        test: /font\/.*\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9-]+)?$/,
        loader: 'file-loader?name=[path][name]-[hash:7].[ext]',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.env,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/html/index.html',
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
})

