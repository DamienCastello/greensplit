const models = require('../models');
const User = models.User;
const faker = require('faker');

User.create({
    email: 'Gamma@gmail.com',
    password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiR2FtbWF0b3Rpc3N1QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGNLeElkdW5RdVlwdUxkbi5hRDFZLnVINEIzbnFzeGlwM2FyclUvRGJrUUtuWkhBZzkveFo2IiwiZmlyc3RuYW1lIjoiSm9obiIsImxhc3RuYW1lIjoiRG9lIiwiYXZhdGFyIjoiaHR0cDovLzE5Mi4xNjguNDIuODg6NTAwMC91cGxvYWRzL2F2YXRhcnMvY2YxNjZiZmMtYWU2Zi00MTMwLTljMjMtNTM3ZmJlMmQzOGRjLmpwZyIsImlzQWRtaW4iOmZhbHNlLCJhZ2UiOiIyOSIsImNpdHkiOiJNb250cGVsbGllciIsInppcGNvZGUiOiIzNDAwMCIsImFkZHJlc3MiOiJSYW1ibGEgZGVzIENhbGlzc29ucyIsImNyZWF0ZWRBdCI6IjIwMjAtMDgtMjlUMTE6NDY6MjYuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjAtMDgtMjlUMTE6NDY6MjYuMDAwWiIsImlhdCI6MTU5ODcwODY2MX0._mMjZUZJeCt2UKf5O0QCCglCL0JIQuOAzrKSvFw_dao',
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