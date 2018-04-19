const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Appointment = mongoose.model('appointments');

module.exports = app => {
  app.post('/api/appointments', requireLogin, async (req, res) => {
    const {
      customerName,
      startTime,
      price,
      locationAddress
      // rooms
    } = req.body;

    const appointment = new Appointment({
      customerName,
      _guru: req.user.id,
      startTime,
      dateScheduled: Date.now(),
      price,
      locationAddress
      // rooms: rooms.map(room => ({ roomName, roomType, whiteGlove, notes }))
    });

    try {
      await appointment.save();
      res.send(req.user);
    } catch (err) {
      res.status(422).send(err);
    }

  });
};
