const models = require('../models');
const Product = models.Product;

module.exports = {
    index: function (req, res, next) {
        Product.findAll()
            .then((products) => { res.json({ products }); })
            .catch((error) => res.status(500).json({ error }));
    },
    show: function (req, res, next) {
        Product.findByPk(req.params.id, { include: ['delivery'] })
            .then((product) => { res.json({ product }); })
            .catch((error) => res.status(500).json({ error }));
    },
    create: function (req, res, next) {
        Product.create({
            name: req.body.name,
            species: req.body.species,
            price: req.body.price,
            preview: req.body.preview,
            stock: req.body.stock,
            companyId: req.body.companyId
        })
            .then((product) => { res.json({ product }); })
            .catch((error) => res.status(500).json({ error }));
    },
    update: function (req, res, next) {
        Product.findByPk(req.params.id, { include: ['delivery'] })
            .then((product) => {
                product.update({
                    name: req.body.name,
                    species: req.body.species,
                    price: req.body.price,
                    preview: req.body.preview,
                    stock: req.body.stock,
                    companyId: req.body.companyId
                })
                    .then((updatedProduct) => { res.json({ product: updatedProduct }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    },
    delete: function (req, res, next) {
        Product.findByPk(req.params.id, { include: ['delivery'] })
            .then((product) => {
                product.destroy()
                    .then((deletedProduct) => { res.json({ message: `${deletedProduct.name} has been deleted` }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    }
}