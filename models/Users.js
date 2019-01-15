const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    password: {
        type: String,

    },
    email: {
        type: String,

    }
});

const model = mongoose.model('user', UserSchema);
module.exports = model;