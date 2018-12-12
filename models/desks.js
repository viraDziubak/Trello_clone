let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DeskSchema = new Schema({
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
    list: {
        type: [],

    },
    user: {
        type: []
    }
});

module.exports = mongoose.model('desk', DeskSchema);