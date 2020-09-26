const models = require('../models');
const User = models.User;
const faker = require('faker');
const { getHost } = require('../utils/ip');

User.create({
    email: 'Gamma@gmail.com',
    password: '$2b$10$3QCaGCo6RTAz/XX26jSDIO6gpEZ1yCxD33XaRCA8i8OBWkuw9h2xC',
    firstname: 'Damien',
    lastname: 'Castello',
    avatar: `${getHost()}/uploads/avatars/seed-user-1.jpg`,
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