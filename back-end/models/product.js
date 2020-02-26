'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [3,20]
      }
    },
    species: {
      type: DataTypes.STRING,
      validate: {
        len: [3,20]
      }
    },
    price: DataTypes.DECIMAL,
    preview: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.Company, {foreignKey: 'companyId', as: 'companies', onDelete: 'SET NULL',
    onUpdate: 'RESTRICT', hooks: true})
  };
  return Product;
};