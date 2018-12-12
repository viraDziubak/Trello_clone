let router = require('express').Router();
let controlError = require('../error/controllerError')

let List = require('../models/lists');


router.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let list = await List.findById(id);
        res.json(list);
    }
    catch (e) {
        next(new controlError(e.message, 400));
    }
});

router.get('/', async (req, res, next) => {
    try {
        res.json(await List.find({}));
    }
    catch (e) {
        next(new controlError(e.message, 400))
    }
});
router.post('/', async (req, res, next) => {
    try {
        let list = await List.create(req.body);
        res.json(list);
    }
    catch (e) {
        next(new controlError(e.message, 400))
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        let list = await List.findByIdAndUpdate(req.params.body, req.body, {new: true});
        res.json(list);
    }
    catch (e) {
        next(new controlError(e.message, 400))
    }

});
router.delete('/:id', async (req, res, next) => {
    try {
        let list = await List.findByIdAndRemove(req.params.body, req.body, {new: true});
        res.json(list);
    }
    catch (e) {
        next(new controlError(e.message, 400))
    }

});

module.exports = router;
