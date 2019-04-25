var webpack = require('webpack')
var path = require('path')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname)
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {
        test: /(\.css)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          }
        }, {
          loader: 'postcss-loader',
        }]
      }
    ]
  }
}
