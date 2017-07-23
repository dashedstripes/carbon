const express = require('express')
const router = express.Router()
const fs = require('fs')

/**
 * This function loops through each of the sibling
 * directories and adds them to the router.
 */

fs.readdir(__dirname, (err, files) => {
  files.forEach((file) => {
    if(file !== 'index.js') {
      let item = require(`./${file}`)
      router.use(item)
    }
  })
})

module.exports = router