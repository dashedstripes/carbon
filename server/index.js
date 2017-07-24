const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const pages = require('./pages')
const api = require('./api')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const compiler = webpack(webpackConfig)
const app = express()
const PORT = 3000 || process.env.PORT

if(process.env.NODE_ENV == 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false, 
    publicPath: webpackConfig.output.publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/dist', express.static(path.join(__dirname, '../client/dist')))

app.use('/api', api)
app.use('/', pages)


app.listen(PORT, () => {
  console.log(`App running on https://localhost:${PORT}`)
})