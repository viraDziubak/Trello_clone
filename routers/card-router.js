let router=require('express').Router();
let cardControllers = require('../controllers/card-controller');
const passport = require('passport');

router.route('/')
  .get(passport.authenticate('jwt', {session: false}), cardControllers.findAll)
  .post(passport.authenticate('jwt', {session: false}), cardControllers.create);

router.route('/:id')
  .get(passport.authenticate('jwt', {session: false}), cardControllers.findOne)
  .put(passport.authenticate('jwt', {session: false}), cardControllers.update)
  .delete(passport.authenticate('jwt', {session: false}), cardControllers.delete);

router.route('/listId/:listId').get(cardControllers.findByListId);

module.exports=router;
