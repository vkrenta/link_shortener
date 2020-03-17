const { model, Schema } = require('mongoose');

const schema = new Schema({
  short: { type: String, required: true, default: '0' },
});

module.exports = model('short', schema);
