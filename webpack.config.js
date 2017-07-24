const webpack = require('webpack')

const config = {

  entry: [
    'webpack-hot-middleware/client',
    './client/src/index.js'
  ],

  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js',
    publicPath: '/dist'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = config