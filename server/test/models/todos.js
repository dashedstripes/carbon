const expect = require('chai').expect
const Todo = require('../../db/models').Todo

module.exports = () => {
  beforeEach((done) => {
    Todo.sync({ force: true, logging: false }).then(() => {
      done()
    })
  })

  describe('Todo', () => {
    it('should have an action', (done) => {
      Todo.create({
        action: ''
      }).then(function (result) {
        expect.fail()
        done()
      }).catch(function (err) {
        expect(err.name).to.be.equal('SequelizeValidationError')
        done()
      })
    })
  })

  after((done) => {
    Todo.drop({ logging: false }).then(() => {
      done()
    })
  })
}