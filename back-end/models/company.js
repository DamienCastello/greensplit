'use strict';
const bcrypt = require('bcrypt');

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
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        return bcrypt.hash(user.password, 10)
          .then((hash) => user.password = hash)
          .catch((error) => console.log('Error on user creation', error));
      },
      beforeUpdate: (user, options) => {
        return bcrypt.hash(user.password, 10)
          .then((hash) => user.password = hash)
          .catch((error) => console.log('Error on user creation', error));
      }
    }
  });
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