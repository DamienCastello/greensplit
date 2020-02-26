const models = require('../models');
const Delivery = models.Delivery;

module.exports = {
    index: function (req, res, next) {
        Delivery.findAll()
            .then((deliveries) => { res.json({ deliveries }); })
            .catch((error) => res.status(500).json({ error }));
    },
    show: function (req, res, next) {
        Delivery.findByPk(req.params.id)
            .then((delivery) => { res.json({ delivery }); })
            .catch((error) => res.status(500).json({ error }));
    },
    create: function (req, res, next) {
        Delivery.create({
            orderDate: req.body.orderDate,
            deliveryDate: req.body.deliveryDate,
            quantity: req.body.quantity,
            amount: req.body.amount,
            userId: req.body.userId,
            companyId: req.body.companyId,
            runerId: req.body.runerId,
            productId: req.body.productId
        })
            .then((delivery) => { res.json({ delivery }); })
            .catch((error) => res.status(500).json({ error }));
    },
    update: function (req, res, next) {
        Delivery.findByPk(req.params.id)
            .then((delivery) => {
                delivery.update({
                    orderDate: req.body.orderDate,
                    deliveryDate: req.body.deliveryDate,
                    quantity: req.body.quantity,
                    amount: req.body.amount,
                    userId: req.body.userId,
                    companyId: req.body.companyId,
                    runerId: req.body.runerId,
                    productId: req.body.productId
                })
                    .then((updatedDelivery) => { res.json({ delivery: updatedDelivery }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    },
    delete: function (req, res, next) {
        Delivery.findByPk(req.params.id)
            .then((delivery) => {
                delivery.destroy()
                    .then((deletedDelivery) => { res.json({ message: `delivery with id ${deletedDelivery.id} has been deleted` }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    }
}