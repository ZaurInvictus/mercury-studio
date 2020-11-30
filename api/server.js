const express = require('express')
const helmet = require('helmet') // adding Helmet to enhance API's security
const cors = require('cors') // enabling CORS for all requests

// IMPORT ROUTES
const submitForm = require('../routes/users')

const server = express()
// 3rd PARTY MIDDLEWARE
server.use(express.json())
server.use(helmet())
server.use(cors())


// ROUTES
server.use('/api/users', submitForm)



// SERVER IS UP
server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Mercury Studio server is up'
    })
})


module.exports = server