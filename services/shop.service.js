const boom = require('@hapi/boom');

const { models} = require('../libs/sequelize')

class ShopService {

  constructor(){
  }

  async create(data) {
    const newShop = await models.Shop.create(data)
    return newShop;
  }

  async find() {
    const shops = await models.Shop.findAll()
    return shops;
  }

  async findOne(id) {
    const shop = await models.Shop.findByPk(id, {
      include: ['products']
    })
    return { shop, id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = ShopService;
