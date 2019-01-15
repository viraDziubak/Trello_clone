const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../config/key');
const User = require('../models/Users');
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
        res.status(401).json({
            message: 'User not found'
        })
    }

};
module.exports.registerController = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email});

    if (candidate) {
        res.status(409).json({
            message: 'Email already exist'
        })
    } else {
        const password = req.body.password;
        const salt = bcrypt.genSaltSync(10);
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        });
        try {
            await user.save();
            res.status(201).json(user)
        } catch (e) {
            errorController(e.message, 500)
        }
    }
};