const express = require('express');

const ShopService = require('../services/shop.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createShopSchema, updateShopSchema, getShopSchema} = require('../schemas/shop.schema');

const router = express.Router();
const service = new ShopService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getShopSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const shop = await service.findOne(id);
      res.json(shop);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createShopSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newShop = await service.create(body);
      res.status(201).json(newShop);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getShopSchema, 'params'),
  validatorHandler(updateShopSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const shop = await service.update(id, body);
      res.json(shop);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getShopSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
