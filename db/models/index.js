// usando la conexion con el orm, configuracion de los modelos

const { User, UserSchema} = require('./user.model')
const {Customer, CustomerSchema} = require('./customer.model')
const {Shop, ShopSchema} = require('./shop.model')
const {Product, ProductSchema} = require('./product.model')
const {Order, OrderSchema} = require('./order.model')
const { OrderProduct, OrderProductSchema } = require('./order-product-model')



function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Shop.init(ShopSchema, Shop.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));




  // corriendo el metodo de la asociacion
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Shop.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);


}



module.exports = setupModels
