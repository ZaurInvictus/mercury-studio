const db = require('../database/db-config')
const Users = require('./user-models')


describe('users model', () => {
  // clear db data before testing
  beforeEach(async () => {
     await db('users').truncate()
  })

  describe('add function', () => {
    it('should insert the provided users into the db', async () => {
      // add users
      await Users.add({ first_name: 'Zaur', last_name: 'Guliyev', email: 'zaur.quliyev@gmail.com', date:'10/10/2020' })
      await Users.add({ first_name: 'John', last_name: 'Doe', email: 'john@gmail.com', date:'20/20/2020' })
      // read data from the table
      const usersNumber = await db('users')
      // verify that there are now two records inserted
      expect(usersNumber).toHaveLength(2)
    })

    it('should insert the provided user into the db', async () => {
      // add user
      const user = await Users.add({ first_name: 'Zaur', last_name: 'Guliyev', email: 'zaur.quliyev@gmail.com', date:'10/10/2020' })
      // verify that the user first name is correct
      expect(user.first_name).toBe('Zaur')
    })

  })
})