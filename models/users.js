const { model, Schema } = require('mongoose');

const schema = new Schema({
  email: { type: String, require: true, unique: true },
  userName: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  dateCreated: { type: Date, default: Date.now },
  links: [Schema.Types.ObjectId],
});

module.exports = model('users', schema);
