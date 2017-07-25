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
      Todo.build({ action: '' }).validate().then((val) => {
        expect.fail()
        done()
      }).catch((err) => {
        expect(err.name).to.equal('SequelizeValidationError')
        done()
      })
    })
  })
}