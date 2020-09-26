const models = require('../models');
const Company = models.Company;
const faker = require('faker');
const { getHost } = require('../utils/ip');

Company.create({
    email: 'Greensplit@gmail.com',
    password: '$2b$10$3QCaGCo6RTAz/XX26jSDIO6gpEZ1yCxD33XaRCA8i8OBWkuw9h2xC',
    name: 'Greensplit',
    avatar: `${getHost()}/uploads/avatars/seed-company-1.jpg`,
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    address: faker.address.streetAddress()
})
.then((response) => { console.log(response); })
.catch((error) => { console.log(error); })