var express = require('express');
var router = express.Router();
const deliveriesController = require('../controllers/deliveriesController');

router.get('/', deliveriesController.index);
router.get('/:id', deliveriesController.show);
router.post('/', deliveriesController.create);
router.put('/:id', deliveriesController.update);
router.delete('/:id', deliveriesController.delete);

module.exports = router;
