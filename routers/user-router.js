let router = require('express').Router();
let controlError = require('../error/controllerError')

let User = require('../models/users');
router.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let user = await User.findById(id);
        res.status(200).json(user);
    }
    catch (e) {
        next(new controlError(e.message, 400));
    }
});

router.get('/', async (req, res, next) => {
    try {
        res.json(await User.find());
    }
    catch (e) {
        next(new controlError(e.message, 400))
    }
});
router.post('/', async (req, res, next) => {
    try {
        let user = await User.create(req.body);
        res.json(user);
    }
    catch (e) {
        next(new controlError(e.message, 400))
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.body, req.body, {new: true});
        res.json(user);
    }
    catch (e) {
        next(new controlError(e.message, 400))
    }

});
router.delete('/:id', async (req, res, next) => {
    try {
        let user = await User.findByIdAndRemove(req.params.body, req.body, {new: true});
        res.json(user);
    }
    catch (e) {
        next(new controlError(e.message, 400))
    }

});

module.exports = router;
