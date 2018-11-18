const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MainfestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { 
        test: '\/.css$/', 
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: '/\.js$/',
        exclude: /(node_modules)/,
        use: [ 'babel-loader' ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.ProvidePlugin({
      _join: ['loadsh', 'join']
    }),
    new MainfestPlugin()
  ]
}