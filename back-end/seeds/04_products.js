const models = require('../models');
const Product = models.Product;
const faker = require('faker');

Product.create({
    name: 'Moby Dick',
    species: 'sativa',
    price: Math.floor(Math.random() * 45)+20,
    preview: faker.image.nature(),
    stock: Math.floor(Math.random() * 45),
    companyId: 1
})
.then((response) => { console.log(response); })
.catch((error) => { console.log(error); })