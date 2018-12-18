const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  user: {
    type: Schema.ObjectId,
    ref: 'user'
  }
});

let model = mongoose.model('group', GroupSchema);
module.exports = model