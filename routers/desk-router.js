const router=require('express').Router();
const deskControllers = require('../controllers/desk-controller');

router.get('/:id', deskControllers.findOne);
router.get('/', deskControllers.findAll);
router.post('/', deskControllers.create);
router.put('/:id', deskControllers.update);
router.delete('/:id', deskControllers.delete);

module.exports=router;
