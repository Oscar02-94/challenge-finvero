const express = require('express');

const productsRouter = require('./products.router');
const shopRouter = require('./shop.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const customersRouter = require('./customers.router');
const authRouter = require('./auth.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/shops', shopRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/customers', customersRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
