const router=require('express').Router();
const listControllers = require('../controllers/list-controller');


router.get('/:id', listControllers.findOne);

router.get('/', listControllers.findAll);
router.post('/', listControllers.create);
router.put('/:id', listControllers.update);
router.delete('/:id', listControllers.delete);

module.exports=router;
