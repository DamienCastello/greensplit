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
    Delivery.belongsTo(models.Company, { as: 'companies', onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT' })
    Delivery.belongsTo(models.Runer, { as: 'runers', onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT' })
    Delivery.belongsTo(models.User, { as: 'users', onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT' })
    Delivery.belongsToMany(Product, { through: 'ProductsDeliveries', onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT' });
    Product.belongsToMany(Delivery, { through: 'ProductsDeliveries', onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT' });
  };
  return Delivery;
};