let router = require('express').Router();

let CardRouter = require('./card-router');
let ListRouter = require('./list-router');
let DeskRouter = require('./desk-router');
let AuthRouter = require('./auth-router');


router.use('/desks', DeskRouter);
router.use('/lists', ListRouter);
router.use('/cards', CardRouter);
router.use('/auth', AuthRouter);


module.exports = router;
