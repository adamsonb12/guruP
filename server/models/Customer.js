const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
  firstName: String,
  lastName: String
  // googleId: String
});

mongoose.model('customers', customerSchema);
