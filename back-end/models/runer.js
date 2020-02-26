'use strict';
module.exports = (sequelize, DataTypes) => {
  const Runer = sequelize.define('Runer', {
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
        len: [3, 20]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 20]
      }
    },
    avatar: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    address: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {});
  Runer.associate = function (models) {
    Runer.belongsTo(models.Company, {foreignKey: 'companyId', as: 'companies', onDelete: 'SET NULL',
    onUpdate: 'RESTRICT', hooks: true})
    Runer.hasMany(models.Delivery, {foreignKey: 'runerId', as: 'runers', onDelete: 'CASCADE',
    onUpdate: 'RESTRICT', hooks: true})
  };
  return Runer;
};