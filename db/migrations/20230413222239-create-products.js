'use strict';

const { SHOP_TABLE, ShopSchema } = require('./../models/shop.model')
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(SHOP_TABLE, ShopSchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(SHOP_TABLE)
    await queryInterface.dropTable(PRODUCT_TABLE)

  }
};
