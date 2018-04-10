const mongoose = require('mongoose');
const { Schema } = mongoose;


const guruSchema = new Schema({
  googleId: String
});

mongoose.model('gurus', guruSchema);
