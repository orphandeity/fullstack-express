const knex = require('../db')

class UserModel {
  async findByUsername({ username }) {
    try {
      let result = await knex('users').where('username', username)
      if (result.length) return result[0]
      else return null
    } catch (err) {
      throw new Error(err)
    }
  }

  async findById({ id }) {
    try {
      let result = await knex('users').where('id', id)
      if (result.length) return result[0]
      else return null
    } catch (err) {
      throw new Error(err)
    }
  }

  async create({ username, hash }) {
    try {
      let newUser = await knex('users').insert(
        {
          username,
          password_hash: hash,
        },
        ['id', 'username']
      )
      return newUser
    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports = new UserModel()
