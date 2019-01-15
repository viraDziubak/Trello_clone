const router = require('express').Router();

const UserRouter = require('./user-router');
const CardRouter = require('./card-router');
const ListRouter = require('./list-router');
const DeskRouter = require('./desk-router');
const AuthRouter = require('./auth-router');

router.use('/users', UserRouter);
router.use('/desks', DeskRouter);
router.use('/lists', ListRouter);
router.use('/cards', CardRouter);
router.use('/auth', AuthRouter);

module.exports = router;