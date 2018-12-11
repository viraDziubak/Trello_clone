let router=require('express').Router();
let controlError=require('../error/controllerError')

let Desk=('../models/desks');


router.get('/:id', async(req, res, next)=>{
    try {
        let id=req.params.id;
        let desk= await Desk.findById(id);
        res.json(desk);
    }
    catch (e){
        next (new controlError(e.message,400));
    }
});

router.get('/', async(req, res, next)=>{
    try{
        res.json(await Desk.find());
    }
    catch (e) {
        next(new controlError(e.message,400))
    }
});
router.post('/', async(req, res, next)=>{
    try {
        let desk= await Desk.create(req.body);
        res.json(desk);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }
});
router.put('/:id', async(req, res, next)=>{
    try{
        let desk= await Desk.findByIdAndUpdate(req.params.body,req.body,{new:true});
        res.json(desk);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }

});
router.delete('/:id', async(req, res, next)=>{
    try{
        let desk= await Desk.findByIdAndRemove(req.params.body,req.body,{new:true});
        res.json(desk);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }

});

module.exports=router;
