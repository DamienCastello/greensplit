const models = require('../models');
const User = models.User;

module.exports = {
    index: function (req, res, next) {
        User.findAll()
            .then((users) => { res.json({ users }); })
            .catch((error) => res.status(500).json({ error }));
    },
    show: function (req, res, next) {
        User.findByPk(req.params.id, { include: 'delivery' })
            .then((user) => { res.json({ user }); })
            .catch((error) => res.status(500).json({ error }));
    },
    create: function (req, res, next) {
        User.create({
            email: req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            avatar: req.body.avatar,
            isAdmin: false,
            age: req.body.age,
            city: req.body.city,
            zipcode: req.body.zipcode,
            address: req.body.address
        })
            .then((user) => { res.json({ user }); })
            .catch((error) => res.status(500).json({ error }));
    },
    update: function (req, res, next) {
        User.findByPk(req.params.id, { include: 'delivery' })
            .then((user) => {
                user.update({
                    email: req.body.email,
                    password: req.body.password,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    avatar: req.body.avatar,
                    isAdmin: false,
                    age: req.body.age,
                    city: req.body.city,
                    zipcode: req.body.zipcode,
                    address: req.body.address
                })
                    .then((updatedUser) => { res.json({ user: updatedUser }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    },
    delete: function (req, res, next) {
        User.findByPk(req.params.id, { include: 'delivery' })
            .then((user) => {
                user.destroy()
                    .then((deletedUser) => { res.json({ message: `${deletedUser.firstname} has been deleted` }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    }
}