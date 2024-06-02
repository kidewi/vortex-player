const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  filePath: { type: String, required: true }
});

module.exports = mongoose.model('Music', MusicSchema);
