const { Model, DataTypes, Sequelize } = require('sequelize')

const SHOP_TABLE = 'shops';

const ShopSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  ShopName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    field:'shop_name'
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    allowNull: true,
    type: DataTypes.STRING,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}


class Shop extends Model {

  static associate(models) {

    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'shopId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SHOP_TABLE,
      modelName: 'Shop',
      timestamps: false
    }
  }
}

module.exports = { Shop, ShopSchema, SHOP_TABLE};
