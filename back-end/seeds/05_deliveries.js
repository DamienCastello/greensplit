const models = require('../models');
const Delivery = models.Delivery;
const faker = require('faker');

Delivery.create({
    orderDate: Date.now(),
    deliveryDate: Date.now(),
    quantity: 3,
    amount: 100,
    userId: 2,
    runerId: 1,
    productId: 1,
    companyId: 1
})
.then((response) => { console.log(response); })
.catch((error) => { console.log(error); })