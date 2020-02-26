'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [3,30]
      }
    },
    avatar: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    Company.hasMany(models.Runer, {foreignKey: 'companyId', as: 'runers', onDelete: 'CASCADE',
    onUpdate: 'RESTRICT', hooks: true})
    Company.hasMany(models.Product, {foreignKey: 'companyId', as: 'products', onDelete: 'CASCADE',
    onUpdate: 'RESTRICT', hooks: true})
    Company.hasMany(models.Delivery, {foreignKey: 'companyId', as: 'deliveries', onDelete: 'CASCADE',
    onUpdate: 'RESTRICT', hooks: true})
  };
  return Company;
};