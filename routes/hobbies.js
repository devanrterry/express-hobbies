var express = require('express');
var router = express.Router();
var hobbiesCtrl = require('../controllers/hobbies');

router.get('/', hobbiesCtrl.index);
router.post('/', hobbiesCtrl.create);
router.get('/:id', hobbiesCtrl.show);
router.delete('/:id', hobbiesCtrl.delete);
router.put('/:id', hobbiesCtrl.update);

module.exports = router;