const { model, Schema } = require('mongoose');

const schema = new Schema({
  user: { type: String, required: true },
  long: { type: String, required: true },
  short: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
});

module.exports = model('links', schema);
