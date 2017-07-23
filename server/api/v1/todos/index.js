const express = require('express')
const router = express.Router()
const Todo = require('../../../db/models').Todo

router.get('/todos', (req, res) => {
  Todo.findAll().then((todos) => {
    res.json(todos)
  })
})

router.post('/todos', (req, res) => {
  res.send('POST /todos')
})

router.put('/todos', (req, res) => {
  res.send('PUT /todos')
})

router.delete('/todos', (req, res) => {
  res.send('DELETE /todos')
})

module.exports = router