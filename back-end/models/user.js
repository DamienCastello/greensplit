'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    firstname: {
      type: DataTypes.STRING,
      validate: {
        len: [3,20]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        len: [3,20]
      }
    },
    avatar: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    age: DataTypes.STRING,
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
  User.associate = function(models) {
    User.hasMany(models.Delivery, {foreignKey: 'userId', as: 'users', onDelete: 'CASCADE',
    onUpdate: 'RESTRICT'})
  };
  return User;
};