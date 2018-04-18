const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomSchema = require('./Room');

const appointmentSchema = new Schema({
  // _customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  customerName: String,
  _guru: { type: Schema.Types.ObjectId, ref: 'Guru' },
  startTime: Date,
  dateScheduled: Date,
  price: Number,
  locationAddress: { lineOne: String, lineTwo: String, city: String, state: String, zip: String },
  rooms: [RoomSchema],
  completed: { type: Boolean, default: false }
  // assignedEmployeeIDs: [String]
});

mongoose.model('appointments', appointmentSchema);
