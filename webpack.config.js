const config = {

  entry: [
    './client/src/index.js'
  ],

  output: {
    path: __dirname,
    filename: './client/dist/bundle.js'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}

module.exports = config