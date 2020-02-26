var express = require('express');
var router = express.Router();
const companiesController = require('../controllers/companiesController');

router.get('/', companiesController.index);
router.get('/:id', companiesController.show);
router.post('/', companiesController.create);
router.put('/:id', companiesController.update);
router.delete('/:id', companiesController.delete);

module.exports = router;