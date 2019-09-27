const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {

  //lista
  async index (req, res) {
    const { user } = req.headers;

    const loggedUser = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } }, //not igual usuario logado
        { _id: { $nin: loggedUser.likes } }, //exclui da lista usuario que ja deu likes
        { _id: { $nin: loggedUser.dislikes } }, //exclui da lista usuario que ja deu dislikes
      ],
    })

    return res.json(users)
  },

  async store(req, res) {

    const { username } = req.body
    const userExists = await Dev.findOne({username: username})

    if(userExists) {
      return res.json(userExists)
    }

    const response = await axios.get(`https://api.github.com/users/${username}`)
    const { name, bio, avatar_url: avatar } = response.data
    
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    })

    return res.json(dev)    
  }

}