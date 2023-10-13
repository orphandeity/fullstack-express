const bcrypt = require('bcrypt')
const UserModel = require('../models/user')

class AuthService {
  async registerUser(data) {
    let { username, password } = data
    try {
      let user = await UserModel.findByUsername({ username })
      if (user) throw new Error('Username already exists')

      let hash = await bcrypt.hash(password, 10)
      return await UserModel.create({ username, hash })
    } catch (err) {
      throw new Error(err)
    }
  }

  async login(data) {
    let { username, password, done } = data
    try {
      let user = await UserModel.findByUsername({ username })
      if (!user) return done(null, false)

      let match = await bcrypt.compare(password, user.password_hash)
      if (!match) return done(null, false)

      return done(null, user)
    } catch (err) {
      return done(err)
    }
  }

  async userList() {
    try {
      return await UserModel.getUsers()
    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports = new AuthService()
