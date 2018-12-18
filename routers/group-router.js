let router = require('express').Router();
let groupControllers = require('../controllers/group-controller');

router.route('/')
  .get(groupControllers.findAll)
  .post(groupControllers.create);

router.route('/:id')
  .get(groupControllers.findOne)
  .put(groupControllers.update)
  .delete(groupControllers.delete);

module.exports = router;