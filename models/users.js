const { model, Schema } = require('mongoose');

const schema = new Schema({
  user: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

module.exports = model('users', schema);
