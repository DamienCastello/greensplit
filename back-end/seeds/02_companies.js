const models = require('../models');
const Company = models.Company;
const faker = require('faker');

Company.create({
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.company.companyName(),
    avatar: faker.image.nature(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    address: faker.address.streetAddress()
})
.then((response) => { console.log(response); })
.catch((error) => { console.log(error); })