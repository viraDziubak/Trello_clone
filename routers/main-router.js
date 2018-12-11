let router=require('express').Router();

let UserRouter=require('./user-router');
let CardRouter=require('./card-router');
let ListRouter=require('./list-router');
let DeskRouter=require('./desk-router');

router.use('/users',UserRouter);
router.use('/desks',DeskRouter);
router.use('/lists',ListRouter);
router.use('/cards',CardRouter);

module.exports=router;