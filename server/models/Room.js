const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
  roomName: String,
  roomType: String,
  whiteGlove: Boolean,
  notes: String
});

module.exports = roomSchema;
