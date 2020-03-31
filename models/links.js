const { model, Schema, Types } = require('mongoose');

const schema = new Schema({
  userId: { type: Types.ObjectId, required: true },
  long: { type: String, required: true },
  short: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
});

module.exports = model('links', schema);
