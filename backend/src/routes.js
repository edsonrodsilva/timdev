const express = require('express')
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router()

routes.get('/devs', DevController.index)

//criar um dev
routes.post('/devs', DevController.store)

//likes
routes.post('/devs/:devId/likes', LikeController.store)

//dislikes
routes.post('/devs/:devId/dislikes', DislikeController.store)


//dislikes
//routes.post('/devs/:devId/dislikes', DislikeController.store)

module.exports = routes