'use strict';
module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    orderDate: DataTypes.DATE,
    deliveryDate: DataTypes.DATE,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    runerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, {});
  const Product = sequelize.define('Product', { 
    name: DataTypes.STRING 
  });
  const ProductsDeliveries = sequelize.define('ProductsDeliveries', {
    DeliveryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Deliveries', // Delivery would also work without quote
        key: 'id'
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products', // Product would also work without quote
        key: 'id'
      }
    }
  });
  Delivery.associate = function (models) {
    Delivery.belongsTo(models.Company, {foreignKey: 'companyId', as: 'companies', onDelete: 'SET NULL',
    onUpdate: 'RESTRICT', hooks: true })
    Delivery.belongsTo(models.Runer, {foreignKey: 'runerId', as: 'runers', onDelete: 'SET NULL',
    onUpdate: 'RESTRICT', hooks: true })
    Delivery.belongsTo(models.User, {foreignKey: 'userId', as: 'users', onDelete: 'SET NULL',
    onUpdate: 'RESTRICT', hooks: true })
    Delivery.belongsToMany(Product, { through: 'ProductsDeliveries', onDelete: 'CASCADE',
    onUpdate: 'RESTRICT' });
    Product.belongsToMany(Delivery, { through: 'ProductsDeliveries', onDelete: 'CASCADE',
    onUpdate: 'RESTRICT' });
  };
  return Delivery;
};