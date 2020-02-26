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
    Company.hasMany(models.Runer, {as: 'runers', onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'})
    Company.hasMany(models.Product, {as: 'products', onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'})
    Company.hasMany(models.Delivery, {as: 'deliveries', onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'})
  };
  return Company;
};