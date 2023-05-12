const boom = require('@hapi/boom');


const { models} = require('./../libs/sequelize')

const bcrypt = require('bcrypt')

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10)
    const newUser = await models.User.create({
      ...data,
      password:hash
    })
    delete newUser.dataValues.password
    return newUser;
  }

  async find() {
    const respuesta = await models.User.findAll({
      include:['customer']
    })
    return respuesta
  }

  async findByEmail( email ) {
    const respuesta = await models.User.findOne({
      where: { email }
    })
    return respuesta
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if(!user){
     throw boom.notFound('User not found')
    }
    return user
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const respuesta = await user.update(changes)
    return respuesta
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id };
  }
}

module.exports = UserService;
