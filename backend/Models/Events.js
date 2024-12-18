const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model('Event', eventSchema);
