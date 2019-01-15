const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    date: {
        type: String,

    },
    cardsMessage: {
        type: String,

    }
});

const model = mongoose.model('card', CardSchema);
module.exports = model;