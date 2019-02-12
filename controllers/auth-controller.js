const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../config/key');
const User = require('../models/users');
let errorController = require('../error/controllerError');

module.exports.loginController = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email});
    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, key.jwt, {expiresIn: 60 * 60});
            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: 'Password wrong! Try again!'
            })

        }
    } else {
        res.status(404).json({
            message: 'User not found'
        })
    }

};
module.exports.registerController = async (req, res, next) => {
    const candidate = await User.findOne({email: req.body.email});
    if (candidate) {
        res.status(409).json({
            message: 'Email already exist'
        })
    } else {
        try {
            const salt = bcrypt.genSaltSync(10);
            console.log(req.body.email, req.body.password);
            const user = await User.create({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt)
            });
            res.status(201).json(user)
        } catch (e) {
            console.log(e);
            next(new errorController(e.message, 500))
        }
    }
};
