const models = require('../models');
const Runer = models.Runer;
const faker = require('faker');
const { getHost } = require('../utils/ip');

Runer.create({
    email: 'Spliter@gmail.com',
    password: '$2b$10$3QCaGCo6RTAz/XX26jSDIO6gpEZ1yCxD33XaRCA8i8OBWkuw9h2xC',
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatar: `${getHost()}/uploads/avatars/seed-runer-1.jpg`,
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    address: faker.address.streetAddress(),
    companyId: 1
})
.then((response) => { console.log(response); })
.catch((error) => { console.log(error); })