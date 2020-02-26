const models = require('../models');
const Runer = models.Runer;
const faker = require('faker');

Runer.create({
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatar: faker.image.avatar(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    address: faker.address.streetAddress(),
    CompanyId: 1
})
.then((response) => { console.log(response); })
.catch((error) => { console.log(error); })