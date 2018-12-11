let router=require('express').Router();
let controlError=require('../error/controllerError')

let Card=('../models/cards');

router.get('/:id', async(req, res, next)=>{
    try {
        let id=req.params.id;
        let card= await Card.findById(id);
        res.json(card);
    }
    catch (e){
        next (new controlError(e.message,400));
    }
});

router.get('/', async(req, res, next)=>{
    try{
        res.json(await Card.find());
    }
    catch (e) {
        next(new controlError(e.message,400))
    }
});
router.post('/', async(req, res, next)=>{
    try {
        let card= await Card.create(req.body);
        res.json(card);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }
});
router.put('/:id', async(req, res, next)=>{
    try{
        let card= await Card.findByIdAndUpdate(req.params.body,req.body,{new:true});
        res.json(card);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }

});
router.delete('/:id', async(req, res, next)=>{
    try{
        let card= await Card.findByIdAndRemove(req.params.body,req.body,{new:true});
        res.json(card);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }

});


module.exports=router;
