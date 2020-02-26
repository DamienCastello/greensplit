const models = require('../models');
const Runer = models.Runer;

module.exports = {
    index: function (req, res, next) {
        Runer.findAll()
            .then((runers) => { res.json({ runers }); })
            .catch((error) => res.status(500).json({ error }));
    },
    show: function (req, res, next) {
        Runer.findByPk(req.params.id, { include: ['delivery'] })
            .then((runer) => { res.json({ runer }); })
            .catch((error) => res.status(500).json({ error }));
    },
    create: function (req, res, next) {
        Runer.create({
            email: req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            avatar: req.body.avatar,
            city: req.body.city,
            zipcode: req.body.zipcode,
            address: req.body.address,
            companyId: req.body.companyId
        })
            .then((runer) => { res.json({ runer }); })
            .catch((error) => res.status(500).json({ error }));
    },
    update: function (req, res, next) {
        Runer.findByPk(req.params.id, { include: ['delivery'] })
            .then((runer) => {
                runer.update({
                    email: req.body.email,
                    password: req.body.password,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    avatar: req.body.avatar,
                    city: req.body.city,
                    zipcode: req.body.zipcode,
                    address: req.body.address,
                    companyId: req.body.companyId
                })
                    .then((updatedRuner) => { res.json({ runer: updatedRuner }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    },
    delete: function (req, res, next) {
        Runer.findByPk(req.params.id, { include: ['delivery'] })
            .then((runer) => {
                runer.destroy()
                    .then((deletedRuner) => { res.json({ message: `${deletedRuner.firstname} has been deleted` }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    }
}