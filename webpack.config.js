const webpack = require('webpack')

const config = {

  entry: [
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
  }
}

if(process.env.NODE_ENV == 'development') {
  config.entry = [
    'webpack-hot-middleware/client',
    './client/src/index.js'
  ]

  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = config