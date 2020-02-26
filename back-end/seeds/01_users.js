const models = require('../models');
const User = models.User;
const faker = require('faker');

User.create({
    email: 'd.castello.13200@gmail.com',
    password: 'azerty',
    firstname: 'Damien',
    lastname: 'Castello',
    avatar: faker.image.image(),
    isAdmin: true,
    age: '29',
    city: 'Arles',
    zipcode: '13200',
    address: '6 rue andré chamson'
}),
User.create({
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatar: faker.image.avatar(),
    isAdmin: false,
    age: (Math.floor(Math.random() * 45)+18).toString(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    address: faker.address.streetAddress()
})