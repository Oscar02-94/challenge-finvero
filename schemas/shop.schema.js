const Joi = require('joi');

const id = Joi.number().integer();
const ShopName = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const email = Joi.string().email()

const createShopSchema = Joi.object({
  ShopName: ShopName.required(),
  image: image.required(),
  email: email.required()
});

const updateShopSchema = Joi.object({
  ShopName: ShopName,
  image: image
});

const getShopSchema = Joi.object({
  id: id.required(),
});

module.exports = { createShopSchema, updateShopSchema, getShopSchema }
