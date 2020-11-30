const request = require('supertest')
const db = require('../database/db-config')
const server = require('../api/server')


describe('Server', () => {
  describe('Register', () => {
    //clear db data before testing
    beforeEach(async () => {
        await db('users').truncate()
    })

    const formData = { first_name: 'Zaur', last_name: 'Guliyev', email: 'zaur.quliyev@gmail.com', date:'10/10/2020' }


    it('has process.env.DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    it('should return a status 200', () => {
        return request(server)
        .post('/api/users')
        .send(formData)
        .then(res => {
            expect(res.status).toBe(200)
        })
    })

    it('should return a welcome message', () => {
        const message = `Welcome Zaur! You have been successfully registered for the event!`
        return request(server)
        .post('/api/users')
        .send(formData)
        .then(res => {
            expect(res.body.message).toEqual(message)
        })
    })

   })

})
