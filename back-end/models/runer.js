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
    Runer.belongsTo(models.Company, {as: 'companies', onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'})
    Runer.hasMany(models.Delivery, {as: 'deliveries', onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'})
  };
  return Runer;
};