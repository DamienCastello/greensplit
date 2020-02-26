var express = require('express');
var router = express.Router();
const runersController = require('../controllers/runersController');

router.get('/', runersController.index);
router.get('/:id', runersController.show);
router.post('/', runersController.create);
router.put('/:id', runersController.update);
router.delete('/:id', runersController.delete);

module.exports = router;