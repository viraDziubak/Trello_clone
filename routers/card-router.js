let router=require('express').Router();
let cardControllers = require('../controllers/card-controller');

router.route('/')
  .get(cardControllers.findAll)
  .post(cardControllers.create);

router.route('/:id')
  .get(cardControllers.findOne)
  .put(cardControllers.update)
  .delete(cardControllers.delete);

router.route('/listId/:listId').get(cardControllers.findByListId);

module.exports=router;