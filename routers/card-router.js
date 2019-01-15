const router=require('express').Router();
const cardControllers = require('../controllers/card-controller');

router.get('/:id', cardControllers.findOne);
router.get('/', cardControllers.findAll);
router.post('/', cardControllers.create);
router.put('/:id', cardControllers.update);
router.delete('/:id', cardControllers.delete);


module.exports=router;
