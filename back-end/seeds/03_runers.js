const models = require('../models');
const Runer = models.Runer;
const faker = require('faker');

Runer.create({
    email: 'Spliter@gmail.com',
    password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiR2FtbWF0b3Rpc3N1QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGNLeElkdW5RdVlwdUxkbi5hRDFZLnVINEIzbnFzeGlwM2FyclUvRGJrUUtuWkhBZzkveFo2IiwiZmlyc3RuYW1lIjoiSm9obiIsImxhc3RuYW1lIjoiRG9lIiwiYXZhdGFyIjoiaHR0cDovLzE5Mi4xNjguNDIuODg6NTAwMC91cGxvYWRzL2F2YXRhcnMvY2YxNjZiZmMtYWU2Zi00MTMwLTljMjMtNTM3ZmJlMmQzOGRjLmpwZyIsImlzQWRtaW4iOmZhbHNlLCJhZ2UiOiIyOSIsImNpdHkiOiJNb250cGVsbGllciIsInppcGNvZGUiOiIzNDAwMCIsImFkZHJlc3MiOiJSYW1ibGEgZGVzIENhbGlzc29ucyIsImNyZWF0ZWRBdCI6IjIwMjAtMDgtMjlUMTE6NDY6MjYuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjAtMDgtMjlUMTE6NDY6MjYuMDAwWiIsImlhdCI6MTU5ODcwODY2MX0._mMjZUZJeCt2UKf5O0QCCglCL0JIQuOAzrKSvFw_dao',
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatar: faker.image.avatar(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    address: faker.address.streetAddress(),
    companyId: 1
})
.then((response) => { console.log(response); })
.catch((error) => { console.log(error); })