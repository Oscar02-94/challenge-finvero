const boom = require('@hapi/boom')
const { Op } = require('sequelize')


const { models } = require('../libs/sequelize')

class ProductsService {

  constructor(){}

  async create(data) {
    const newProduct = await models.Product.create(data)
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }
    // paginate
    const  {limit, offset } = query
    if (limit && offset) {
      options.limit = limit,
      options.offset = offset
    }
    // find for range price
    const { price } = query
    if (price) {
      options.where.price = price
    }

    // fien for range min max
    const { price_min, price_max } = query
    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      }
    }

    const productos = await models.Product.findAll(options)
    return productos
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;