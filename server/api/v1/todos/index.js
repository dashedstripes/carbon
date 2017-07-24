const express = require('express')
const router = express.Router()
const Todo = require('../../../db/models').Todo

router.route('/todos')

  .get((req, res) => {
    Todo.findAll().then((todos) => {
      res.json(todos)
    })
  })

  .post((req, res) => {
    Todo.create({
      action: req.body.action
    }).then((todo) => {
      res.json(todo)
    })
  })

router.route('/todos/todo_id')

  .get((req, res) => {
    Todo.findAll({
      where: {
        id: req.params.todo_id
      }
    }).then((todo) => {
      res.json(todo)
    })
  })

  .put((req, res) => {
    Todo.update({
      action: req.body.action
    }, {
      where: {
        id: req.params.todo_id
      }
    }).then((account) => {
      res.json({ message: 'Todo updated.' })
    })
  })

  .delete((req, res) => {
    Todo.destroy({
      where: {
        id: req.params.todo_id
      }
    }).then(() => {
      res.json({ message: 'Todo destroyed.' })
    })
  })


module.exports = router