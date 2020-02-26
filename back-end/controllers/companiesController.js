const models = require('../models');
const Company = models.Company;

module.exports = {
    index: function (req, res, next) {
        Company.findAll()
            .then((companies) => { res.json({ companies }); })
            .catch((error) => res.status(500).json({ error }));
    },
    show: function (req, res, next) {
        Company.findByPk(req.params.id)
            .then((company) => { res.json({ company }); })
            .catch((error) => res.status(500).json({ error }));
    },
    create: function (req, res, next) {
        Company.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            avatar: req.body.avatar,
            city: req.body.city,
            zipcode: req.body.zipcode,
            address: req.body.address
        })
            .then((company) => { res.json({ company }); })
            .catch((error) => res.status(500).json({ error }));
    },
    update: function (req, res, next) {
        Company.findByPk(req.params.id)
            .then((company) => {
                company.update({
                    email: req.body.email,
                    password: req.body.password,
                    name: req.body.name,
                    avatar: req.body.avatar,
                    city: req.body.city,
                    zipcode: req.body.zipcode,
                    address: req.body.address
                })
                    .then((updatedCompany) => { res.json({ company: updatedCompany }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    },
    delete: function (req, res, next) {
        Company.findByPk(req.params.id)
            .then((company) => {
                company.destroy()
                    .then((deletedCompany) => { res.json({ message: `${deletedCompany.name} has been deleted` }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    }
}