const express = require('express')

const routes = express.Router()

//GET, POST, PUT, DELETE
routes.get('/', (req, res) => {
    const query = req.query
    return res.json({
        name: query
    })
})

routes.post('/devs', (req, res) => {
    return res.json(req.body)
})

module.exports = routes